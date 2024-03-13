<script>
  $(document).ready(function() {
    // Check if the user has already voted
    var hasVoted = localStorage.getItem('voted');
    if (hasVoted) {
      // Disable voting buttons if the user has already voted
      $('.vote-btn').prop('disabled', true);
    }

    // Function to handle idea submission
    $('#ideaForm').submit(function(event) {
      event.preventDefault(); // Prevent form submission

      var ideaText = $('#ideaInput').val().trim(); // Get idea text
      if (ideaText !== '') {
        // Create new idea object
        var newIdea = {
          text: ideaText,
          votes: 0
        };

        ideas.push(newIdea); // Add idea to array
        displayIdeas(); // Update display
        $('#ideaInput').val(''); // Clear input field
      }
    });

    // Function to handle voting for an idea
    function voteForIdea(idea) {
      idea.votes++; // Increment votes for the idea
      displayIdeas(); // Update display

      // Store in browser that user has voted
      localStorage.setItem('voted', 'true');

      // Disable voting buttons
      $('.vote-btn').prop('disabled', true);
    }
  });
</script>
