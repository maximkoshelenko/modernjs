// Hard code data
const data = [
    {
        name: 'Maks Ko',
        age: 33,
        gender: 'male',
        lookingfor: 'Olka',
        location: 'Dnipro Sich',
        image: 'https://randomuser.me/api/portraits/med/men/65.jpg'

    },
    {
        name: 'Olka Vas',
        age: 34,
        gender: 'female',
        lookingfor: 'Maks',
        location: 'Dnipro Sich',
        image: 'https://randomuser.me/api/portraits/med/women/66.jpg'

    },
    {
        name: 'Yupik',
        age: 7,
        gender: 'cat',
        lookingfor: 'Food',
        location: 'Dnipro Sich',
        image: 'https://randomuser.me/api/portraits/med/men/1.jpg'

    },
];

const profiles = profileIterator(data);

// Call first profile automatically
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class='list-group'>
        <li class='list-group-item'>Name: ${currentProfile.name}
        </li>
        <li class='list-group-item'>Age: ${currentProfile.age}
        </li>
        <li class='list-group-item'>Gender: ${currentProfile.gender}
        </li>
        <li class='list-group-item'>Preference: ${currentProfile.lookingfor}
        </li>
        <li class='list-group-item'>Location: ${currentProfile.location}
        </li>
        </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">
        `;
    } else {
        // No more profiles
        window.location.reload();
        
    }
}

// Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}