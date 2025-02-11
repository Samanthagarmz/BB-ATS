import './AddCandidate.css';

export function AddCandidate() {
  return (
    <div>
      <div class="logo">
        <img src="https://www.bonbloc.com/images/bonbloc_logo.svg" alt="Company Logo"></img>
      </div>
      <header>
        <nav id="toolbar">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="/login">Add Candidate</a></li>
            <li><a href="atractivos.html">Candidates</a></li>
            <li><a href="testimonios.html">Requisitions</a></li>
            <li><a href="reservacion.html">Entry positions</a></li>
            <li><a href="contenido.html">Reports</a></li>
          </ul>
        </nav>
      </header>
      <div class="container">
        <h1>Add Candidate</h1>

        <form action="candidate_info.php" method="POST">
          <section>
            <h2>Candidate Information</h2>
            <label for="job_position">Job Position:</label>
            <input type="text" id="job_position" name="job_position" placeholder="Enter job position" required />

            <label for="candidate_name">* Candidate's Name:</label>
            <input type="text" id="candidate_name" name="candidate_name" placeholder="Enter candidate name" required />

            <label for="candidate_Last_Name">* Candidate's Last Name:</label>
            <input type="text" id="candidate_Last_Name" name="candidate_Last_Name" placeholder="Enter candidate Last name" required />

            <label for="phone_number">* Candidate's Phone Number:</label>
            <input type="tel" id="phone_number" name="phone_number" placeholder="Enter candidate's phone number" required pattern="[0-9]*" />

            <label for="email_address">* Email Address</label>
            <input type="text" id="email_address" name="email_address" placeholder="Enter candidate's email address" required />

            <label for="status">Candidate Status:</label>
            <select id="status" name="status" required>
              <option value="">Select status</option>
              <option value="HR Screening">HR Screening</option>
              <option value="Pending to Send">Pending to Send</option>
              <option value="Sent to Client">Sent to Client</option>
            </select>

            <label for="notes">Additional Notes:</label>
            <textarea id="notes" name="notes" rows="4" cols="50" placeholder="Enter any additional observations..."></textarea>
          </section>
          <button type="submit">Submit Candidate Info</button>
        </form>
      </div>




    </div>

  );
}