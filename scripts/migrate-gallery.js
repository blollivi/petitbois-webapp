import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import matter from 'front-matter';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GITES_DIR = path.join(__dirname, '..', 'src', 'content', 'gites');
const PHOTOS_DIR = path.join(__dirname, '..', 'public', 'photos');

async function migrateGallery() {
  console.log('🔄 Starting gallery migration...\n');

  // Read all markdown files
  const mdFiles = fs.readdirSync(GITES_DIR).filter(f => f.endsWith('.md'));

  for (const file of mdFiles) {
    const filePath = path.join(GITES_DIR, file);
    console.log(`📄 Processing: ${file}`);

    // Read and parse the file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(fileContent);

    // Check if galleryFolder exists
    if (!parsed.attributes.galleryFolder) {
      console.log(`  ⚠️  No galleryFolder found, skipping\n`);
      continue;
    }

    const galleryFolder = parsed.attributes.galleryFolder;
    const photosPath = path.join(PHOTOS_DIR, galleryFolder);

    // Check if the photos directory exists
    if (!fs.existsSync(photosPath)) {
      console.log(`  ⚠️  Photos directory not found: ${photosPath}`);
      console.log(`  Creating gallery array as empty\n`);
      parsed.attributes.gallery = [];
    } else {
      // Find all image files
      const imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg'];
      const imageFiles = fs.readdirSync(photosPath)
        .filter(f => {
          const ext = path.extname(f).toLowerCase().slice(1);
          return imageExtensions.includes(ext);
        })
        .sort(); // Sort for consistent ordering

      // Convert to public paths
      const galleryPaths = imageFiles.map(img => `/photos/${galleryFolder}/${img}`);

      console.log(`  ✅ Found ${imageFiles.length} images`);
      parsed.attributes.gallery = galleryPaths;
    }

    // Remove the old galleryFolder field
    delete parsed.attributes.galleryFolder;

    // Reconstruct the file content
    const newFrontmatter = yaml.dump(parsed.attributes, {
      lineWidth: -1, // Don't wrap lines
      quotingType: '"',
      forceQuotes: false
    });

    const newContent = `---\n${newFrontmatter}---\n${parsed.body}`;

    // Write back to file
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`  💾 Updated ${file}\n`);
  }

  console.log('✨ Migration complete!\n');
  console.log('Next steps:');
  console.log('  1. Review the updated markdown files');
  console.log('  2. Update public/admin/config.yml');
  console.log('  3. Update React components (Gallery.jsx, GiteDetail.jsx)');
}

migrateGallery().catch(console.error);
