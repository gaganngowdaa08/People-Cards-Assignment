const leaders = [
    { 
        name: "Steve Jobs", 
        vision: "Computers as appliances", 
        img: "https://picsum.photos/id/1/600/400",
        bio: "Co-founder of Apple Inc., Jobs revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. He believed products should be so simple they work like a kitchen appliance. His obsession with detail, from the fonts to the internal wiring, set the standard for modern tech aesthetics."
    },
    { 
        name: "Sundar Pichai", 
        vision: "Information at a click", 
        img: "https://picsum.photos/id/20/600/400",
        bio: "As the CEO of Google and Alphabet, Pichai has led the development of Chrome, Drive, and Android. His leadership focuses on making information universally accessible and useful. He transitioned Google into an 'AI-first' company, ensuring that technology solves real-world problems through simplicity and scale."
    },
    { 
        name: "Jensen Huang", 
        vision: "The future is GPU and AI", 
        img: "https://picsum.photos/id/60/600/400",
        bio: "The co-founder and CEO of NVIDIA, Huang saw the potential of Graphics Processing Units (GPUs) long before the AI boom. Under his vision, NVIDIA moved from gaming chips to becoming the backbone of global AI computing. He is known for his 'no-job-is-beneath-me' attitude and his signature leather jacket style."
    },
    { 
        name: "Ron Kaufman", 
        vision: "Service Excellence guru", 
        img: "https://picsum.photos/id/119/600/400",
        bio: "The world's leading educator for uplifting service, Kaufman's principles helped transform Singapore's Changi Airport into a global benchmark. He teaches that service is taking action to create value for someone else. His 'Six Levels of Service' framework is used by top global companies to create outstanding customer experiences."
    }
];

const container = document.getElementById('people-container');

// Map function to generate cards
container.innerHTML = leaders.map((person, index) => `
    <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm custom-card" style="animation-delay: ${index * 0.15}s">
            <img src="${person.img}" class="card-img-top" alt="${person.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Load+Error'">
            <div class="card-body text-center">
                <h5 class="card-title text-primary fw-bold">${person.name}</h5>
                <p class="card-text text-muted small fst-italic">"${person.vision}"</p>
                <button onclick="showDetails(${index})" class="btn btn-primary btn-sm rounded-pill px-4 mt-2 shadow-sm">Read Details</button>
            </div>
        </div>
    </div>
`).join('');

// Function to handle the "Read Details" click
function showDetails(index) {
    const leader = leaders[index];
    document.getElementById('modalTitle').innerText = leader.name;
    document.getElementById('modalDescription').innerText = leader.bio;
    
    // Trigger the Bootstrap Modal
    const myModal = new bootstrap.Modal(document.getElementById('leaderModal'));
    myModal.show();
}