@plan

### Context
We are migrating the application's data source from a hardcoded JavaScript object (`mockData.js`) to a file-based content system (`src/content/`) to enable **Decap CMS**.

We will use **Netlify Identity** for authentication. The `mockData.js` file will be rewritten to act as a "Data Loader" that reads these new files and serves them to the app in the format it expects, ensuring no changes are needed in the React components.

### Step-by-Step Plan

#### 1. Install Dependencies
We need a library to parse the "Frontmatter" (metadata) from the Markdown files we will use for the Gites.

*   **Command:** `npm install front-matter`

#### 2. Create Content Directory Structure
Create the following folders to store the data:
*   `src/content/`
*   `src/content/gites/`

#### 3. Migrate Data: General Settings
Extract the `general` object from `mockData.js` into a JSON file.

*   **File:** `src/content/general.json`
*   **Content:** Create a JSON object containing the `title`, `address`, `phone`, `email`, `introText`, `fullDescription`, `history` object, and `images` object exactly as they appear in `mockData.js`.

#### 4. Migrate Data: Testimonials
Extract the `testimonials` array into a JSON file.

*   **File:** `src/content/testimonials.json`
*   **Content:** A JSON object with a key `testimonials` containing the array of testimonial objects (id, author, text).

#### 5. Migrate Data: Gites (Markdown)
Convert each Gite object into a Markdown file. The properties (id, slug, nom, price, etc.) go into the **Frontmatter** (YAML at the top), and the `description` goes into the **Body**.

*   **File:** `src/content/gites/l-etable.md`
    *   **Frontmatter:** `id: 1`, `slug: "l-etable"`, `nom`, `description_courte`, `price`, `capacity`, `image`, `galleryFolder`, `amenities` (list).
    *   **Body:** The full text from the `description` field.
*   **File:** `src/content/gites/le-verger.md`
    *   **Frontmatter:** Same structure, data for "Le Verger".
    *   **Body:** Description text.
*   **File:** `src/content/gites/le-marronnier.md`
    *   **Frontmatter:** Same structure, data for "Le Marronnier".
    *   **Body:** Description text.

#### 6. Implement Data Loader
Rewrite `mockData.js` to dynamically load the files created above.

*   **File:** `src/data/mockData.js`
*   **Imports:**
    *   `attributes` from `front-matter`.
    *   `generalData` from `../content/general.json`.
    *   `testimonialsData` from `../content/testimonials.json`.
*   **Logic:**
    1.  Use `import.meta.glob('../content/gites/*.md', { eager: true, query: '?raw' })` to load all Gite markdown files as raw strings.
    2.  Map over the results:
        *   Pass the raw string to `front-matter` to extract `attributes` (metadata) and `body` (description).
        *   Return a merged object: `{ ...attributes, description: body }`.
    3.  Sort the Gites by `id`.
    4.  Export `siteData` object containing:
        *   `general`: `generalData`
        *   `gites`: The processed gites array.
        *   `testimonials`: `testimonialsData.testimonials`

#### 7. Setup Decap CMS Admin
Create the static admin interface.

*   **File:** `public/admin/index.html`
    *   **Content:** Standard HTML boilerplate for Decap CMS.
    *   **Scripts:**
        *   Include the Netlify Identity widget script: `https://identity.netlify.com/v1/netlify-identity-widget.js`.
        *   Include the Decap CMS script: `https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js`.

*   **File:** `public/admin/config.yml`
    *   **Backend:** `name: git-gateway`, `branch: main`.
    *   **Media:** `media_folder: "public/photos"`, `public_folder: "/photos"`.
    *   **Collections:**
        1.  **Gites:** Folder `src/content/gites`, create `true`, fields mapping to the Frontmatter + Body (widget: markdown).
        2.  **Settings:** Files collection for `general.json` and `testimonials.json`.

#### 8. Enable Netlify Identity on Main Site
The Netlify Identity widget needs to be on the main index page to handle the email redirection loop when a user logs in.

*   **File:** `index.html` (Root)
*   **Action:** Add the Netlify Identity script tag inside the `<head>`:
    `<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>`

#### 9. Manual Instructions (Post-Coding)
*   **Note:** I will provide a reminder that you must create a site on Netlify, link this repo, and enable "Identity" and "Git Gateway" in the Netlify dashboard for this to work.