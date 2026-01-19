# ☀️ Clima

A clean and polished weather application built with React that provides real-time weather data for cities around the world.

![Clima Weather App](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **Dual API Integration**: Utilizes both OpenWeatherMap API and OpenMeteo for comprehensive weather information
- **Clean & Modern UI**: Polished interface designed for optimal user experience
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- **React** - UI library for building interactive user interfaces
- **Vite** - Next-generation frontend build tool
- **OpenWeatherMap API** - Weather data provider
- **OpenMeteo API** - Additional weather data source
- **CSS3** - Styling and animations
- **ESLint** - Code quality and consistency

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

You'll also need API keys from:
- [OpenWeatherMap](https://openweathermap.org/api) - Sign up for a free API key
- [OpenMeteo](https://open-meteo.com/) - Free to use, no API key required

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mgalen007/Clima.git
   cd Clima
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your API keys:
   ```env
   OPENWEATHER_API_KEY=your_openweathermap_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the app

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

The optimized files will be generated in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
Clima/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── services/        # API service files
│   ├── styles/          # CSS stylesheets
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md
```

## 🌐 API Usage

### OpenWeatherMap API
Used for fetching detailed weather information including:
- Current temperature
- Weather conditions
- Humidity and pressure
- Wind speed and direction

### OpenMeteo API
Provides additional meteorological data:
- Extended forecasts
- Historical weather data
- Detailed atmospheric information

## 🎨 Customization

You can customize the app by modifying:
- **Theme colors**: Edit the CSS variables in `src/styles/`
- **API endpoints**: Modify service files in `src/services/`
- **Components**: Customize React components in `src/components/`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**mgalen007**
- GitHub: [@mgalen007](https://github.com/mgalen007)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data API
- [OpenMeteo](https://open-meteo.com/) for additional weather information
- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://react.dev/) community for excellent documentation

## 📧 Contact

If you have any questions or suggestions, feel free to reach out or open an issue on GitHub.

---

<div align="center">
  Made with ☀️ by mgalen007
</div>
