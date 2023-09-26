// vite.config.js
import path from "path";
import { defineConfig } from "file:///C:/Mon_Espace/Work/Build/Openclassroom/P14/rendu/react-cmp-md/selectMenu-cmp/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Mon_Espace/Work/Build/Openclassroom/P14/rendu/react-cmp-md/selectMenu-cmp/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///C:/Mon_Espace/Work/Build/Openclassroom/P14/rendu/react-cmp-md/selectMenu-cmp/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Mon_Espace/Work/Build/Openclassroom/P14/rendu/react-cmp-md/selectMenu-cmp/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_dirname = "C:\\Mon_Espace\\Work\\Build\\Openclassroom\\P14\\rendu\\react-cmp-md\\selectMenu-cmp";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.js"),
      name: "selectmenu-cmp",
      fileName: (format) => `selectmenu-cmp.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      },
      plugins: []
    },
    test: {
      globals: false,
      environment: "jsdom"
    }
  },
  plugins: [react()],
  css: {
    // Add PostCSS plugins to the preprocess options
    preprocess: {
      // Use the PostCSS plugin and specify its configuration file
      postcss: {
        plugins: [
          autoprefixer(),
          // Include autoprefixer
          tailwindcss()
          // Include Tailwind CSS
        ]
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxNb25fRXNwYWNlXFxcXFdvcmtcXFxcQnVpbGRcXFxcT3BlbmNsYXNzcm9vbVxcXFxQMTRcXFxccmVuZHVcXFxccmVhY3QtY21wLW1kXFxcXHNlbGVjdE1lbnUtY21wXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxNb25fRXNwYWNlXFxcXFdvcmtcXFxcQnVpbGRcXFxcT3BlbmNsYXNzcm9vbVxcXFxQMTRcXFxccmVuZHVcXFxccmVhY3QtY21wLW1kXFxcXHNlbGVjdE1lbnUtY21wXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Nb25fRXNwYWNlL1dvcmsvQnVpbGQvT3BlbmNsYXNzcm9vbS9QMTQvcmVuZHUvcmVhY3QtY21wLW1kL3NlbGVjdE1lbnUtY21wL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5qcycpLFxuICAgICAgbmFtZTogJ3NlbGVjdG1lbnUtY21wJyxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgc2VsZWN0bWVudS1jbXAuJHtmb3JtYXR9LmpzYFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBbXSxcbiAgICB9LFxuICAgIHRlc3Q6IHtcbiAgICAgIGdsb2JhbHM6IGZhbHNlLFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbSdcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGNzczoge1xuICAgIC8vIEFkZCBQb3N0Q1NTIHBsdWdpbnMgdG8gdGhlIHByZXByb2Nlc3Mgb3B0aW9uc1xuICAgIHByZXByb2Nlc3M6IHtcbiAgICAgIC8vIFVzZSB0aGUgUG9zdENTUyBwbHVnaW4gYW5kIHNwZWNpZnkgaXRzIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgYXV0b3ByZWZpeGVyKCksIC8vIEluY2x1ZGUgYXV0b3ByZWZpeGVyXG4gICAgICAgICAgdGFpbHdpbmRjc3MoKSwgLy8gSW5jbHVkZSBUYWlsd2luZCBDU1NcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBd2EsT0FBTyxVQUFVO0FBQ3piLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUp6QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsa0JBQWtCLE1BQU07QUFBQSxJQUNoRDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsS0FBSztBQUFBO0FBQUEsSUFFSCxZQUFZO0FBQUE7QUFBQSxNQUVWLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNQLGFBQWE7QUFBQTtBQUFBLFVBQ2IsWUFBWTtBQUFBO0FBQUEsUUFDZDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
