import decode from 'jwt-decode'; // Import the `decode` function from the `jwt-decode` library

// Define the `AuthService` class
class AuthService {
  // Method to get the profile information from the decoded token
  getProfile() {
    // Call `decode` with the token to get the decoded payload
    return decode(this.getToken());
  }

  // Method to check if the user is logged in
  loggedIn() {
    // Get the token from local storage
    const token = this.getToken();
    // Check if there is a token and it is not expired
    // Return `true` if the token exists and is valid, otherwise return `false`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // Method to check if the token has expired
  isTokenExpired(token) {
    // Decode the token to get the expiration time
    const decoded = decode(token);
    // Compare the expiration time with the current time to check if the token is expired
    if (decoded.exp < Date.now() / 1000) {
      // If the token is expired, remove it from local storage
      localStorage.removeItem('id_token');
      // Return `true` to indicate that the token has expired
      return true;
    }
    // Return `false` if the token has not expired yet
    return false;
  }

  // Method to get the token from local storage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Method to handle login
  login(idToken) {
    // Store the token in local storage
    localStorage.setItem('id_token', idToken);
    // Redirect the user to the root URL
    window.location.assign('/');
  }

  // Method to handle logout
  logout() {
    // Remove the token from local storage
    localStorage.removeItem('id_token');
    // Reload the window to reset the application state
    window.location.reload();
  }
}

// Create an instance of the `AuthService` class and export it
export default new AuthService();