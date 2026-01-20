@plan

### Context
We are implementing a photo gallery for the Gîte Detail page. This involves updating the data model to support multiple images per gîte, creating a reusable Gallery UI component, and integrating it into the detail view.

**Files to modify:**
1.  `src/data/mockData.js`
2.  `src/components/Gallery.jsx` (New File)
3.  `src/pages/GiteDetail.jsx`

---

### Step-by-Step Plan

#### 1. Update Data Model
We need to add a `gallery` array to each gîte object in the mock data.

*   Open `src/data/mockData.js`.
*   Locate the `gites` array.
*   For **each** of the 3 gîte objects (`id: 1`, `id: 2`, `id: 3`), add a new property named `gallery`.
*   Populate this array with 4-6 placeholder image URLs (using `placehold.co` for now to ensure immediate visibility).
*   **Action:** Add the following structure to each gîte object:
    ```javascript
    gallery: [
      "https://placehold.co/600x400?text=Cuisine",
      "https://placehold.co/600x400?text=Salon",
      "https://placehold.co/600x400?text=Chambre",
      "https://placehold.co/600x400?text=Jardin",
      "https://placehold.co/600x400?text=Salle+de+bain"
    ],
    ```

#### 2. Create Gallery Component
We will create a responsive grid component to display these images.

*   Create a new file: `src/components/Gallery.jsx`.
*   **Imports:** Import `React`.
*   **Props:** The component should accept a prop named `images` (an array of strings).
*   **Logic:**
    *   Check if `images` exists and has length > 0. If not, return `null`.
    *   Render a `section` with a title "Galerie Photos".
    *   Render a `div` with a CSS Grid layout:
        *   Mobile: 1 column (`grid-cols-1`)
        *   Tablet: 2 columns (`md:grid-cols-2`)
        *   Desktop: 3 columns (`lg:grid-cols-3`)
        *   Gap: `gap-4`
    *   Map through the `images` array. For each image:
        *   Render an `img` tag.
        *   Classes: `w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity`.
        *   Add `loading="lazy"` for performance.
*   **Export:** Default export the component.

#### 3. Integrate Gallery into Detail Page
Now we place the gallery on the detail page.

*   Open `src/pages/GiteDetail.jsx`.
*   **Import:** Import the new component at the top:
    ```javascript
    import Gallery from '../components/Gallery';
    ```
*   **Locate Insertion Point:** Find the closing `div` of the main content grid. This is the `div` containing the "Left Column" and "Right Column".
    *   Look for the closing tag of `<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">`.
*   **Insert Component:** Immediately **after** that closing `div`, but still inside the white container (`max-w-5xl ... bg-white ...`), insert the `<Gallery />` component.
*   **Pass Props:** Pass the gîte's gallery data:
    ```jsx
    <div className="mt-12 pt-12 border-t border-stone-100">
      <Gallery images={gite.gallery} />
    </div>
    ```

#### 4. (Optional) Asset Folder Structure
*   *Note for user:* To use real photos later, create a folder `public/images/` and update the paths in `src/data/mockData.js` to point to local files (e.g., `/images/kitchen.jpg`) instead of the placeholder URLs.