// Basic interactivity for the Open Android Dex website.
// Placeholder for future enhancements (e.g., mobile menu, smooth scroll polyfills).

document.addEventListener("DOMContentLoaded", () => {
  console.log("Open Android Dex website loaded.");

  const pokemon = [
    { name: "bulbasaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { name: "ivysaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { name: "venusaur", type: "grass", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { name: "charmander", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { name: "charmeleon", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { name: "charizard", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
    { name: "squirtle", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    { name: "wartortle", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
    { name: "blastoise", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    { name: "pikachu", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
  ];

  const searchInput = document.getElementById("pokemon-search");
  const results = document.getElementById("pokemon-results");

  function render(query) {
    results.innerHTML = "";
    const filtered = pokemon.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      results.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:var(--text-muted);'>No Pokémon found.</p>";
      return;
    }

    filtered.forEach((p) => {
      const card = document.createElement("div");
      card.className = "pokemon-card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.type}</p>
      `;
      results.appendChild(card);
    });
  }

  if (searchInput && results) {
    render("");
    searchInput.addEventListener("input", (e) => render(e.target.value));
  }
});
