function LogIn() {
  return (
    <div class="container">
      <div class="logo">
        <img src="https://www.bonbloc.com/images/bonbloc_logo.svg" alt="Company Logo" />
      </div>
      <h1>Login</h1>
      <form action="login.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        <div style={{ marginTop: 20 }}></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LogIn;