function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    return `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
}

// Example usage:
console.log(fahrenheitToCelsius(32)); // Output: 32°F is equal to 0.00°C
console.log(fahrenheitToCelsius(100)); // Output: 100°F is equal to 37.78°C
