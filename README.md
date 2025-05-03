# AI Image Generator

An elegant web-based application that generates images using various AI models through the Hugging Face API. Create stunning AI-generated artwork from text descriptions with multiple customization options.

![AI Image Generator Logo](images/test.png)

## Features

- 🎨 Multiple AI Model Support

  - FLUX-1-dev
  - FLUX-1-schnell
  - Stable Diffusion XL
  - Stable Diffusion v1.5
  - Open Journey

- ⚡ Advanced Generation Options

  - Customizable image count (1-4 images)
  - Multiple aspect ratios (1:1, 16:9, 9:16)
  - Detailed prompt input system

- 🌓 Dark/Light Theme Support

  - Automatic system preference detection
  - Manual theme toggle
  - Persistent theme settings

- 💡 User-Friendly Interface
  - Random prompt suggestions
  - Real-time generation status
  - Easy image download functionality
  - Responsive design for all devices

## Technologies Used

- HTML5
- CSS3 (with Modern Features)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Hugging Face API

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Tarek2099/ai-image-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-image-generator
   ```

3. Set up your API key:

   - Sign up for a Hugging Face account
   - Get your API key from Hugging Face
   - Replace the `API_KEY` in `js/generateIMG.js` with your key

4. Open the project:
   - Use a local development server or open `index.html` directly in a browser

## Usage

1. Enter your image description in the text area
2. Select an AI model from the dropdown menu
3. Choose the number of images to generate (1-4)
4. Select your preferred aspect ratio
5. Click "Generate" to create your images
6. Download generated images using the download button on each image

## Project Structure

```
├── assets/
│   └── demoinputs.js      # Example prompts for random suggestions
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── createIMG.js       # Image card creation logic
│   ├── formSubmission.js  # Form handling
│   ├── generateIMG.js     # AI image generation
│   ├── getDimensions.js   # Aspect ratio calculations
│   ├── randomInput.js     # Random prompt functionality
│   ├── script.js          # Main JavaScript file
│   ├── theme.js          # Theme switching logic
│   └── updateImages.js    # Image update handling
├── index.html            # Main HTML file
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

- **Tarek**
- GitHub: [@Tarek2099](https://github.com/Tarek2099)

## Acknowledgments

- Hugging Face for providing the AI models
- Font Awesome for the icons
- Google Fonts for the Inter font family
