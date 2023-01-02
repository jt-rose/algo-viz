# Deployment with Vercel

For deployment with vercel, the wasm-rust files cannot, to my knowledge, be generated during the build process, which would require a rust environment not provided by vercel. To get around this, we will track the generated wasm files in git and point our source code to the already generated files during vercel's build phase.

This does carry a downside of requiring us to manually build and commit the generated files as needed rather than having these produced automatically via the build process.
