
    // Variables globales
    let panier = [];
    let totalPanier = 0;

    // Fonction pour ajouter un article au panier
    function ajouterAuPanier(nomProduit, prixProduit) {
        panier.push({ nom: nomProduit, prix: prixProduit });
        totalPanier += prixProduit;
    }

    // Fonction pour afficher la facture
    function afficherFacture() {
        let factureHTML = "<h2>Facture</h2>";
        factureHTML += "<ul>";
        panier.forEach(article => {
            factureHTML += `<li>${article.nom} - ${article.prix}fca</li>`;
        });
        factureHTML += "</ul>";
        factureHTML += `<p>Total : ${totalPanier}fca</p>`;

        // Affichage de la facture dans une fenêtre modale
        alert(factureHTML);
    }

    // Ajout des événements onclick aux boutons "Ajouter au Panier"
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.onclick = function () {
            let card = this.closest('.card');
            let nomProduit = card.querySelector('.card-title').innerText;
            let prixProduit = parseInt(card.querySelector('.card-text:last-child').innerText.replace('Prix : ', '').replace('fca', ''));
            ajouterAuPanier(nomProduit, prixProduit);
        };
    });

    // Événement onclick pour le bouton "Terminer"
    document.getElementById('terminerBtn').onclick = function () {
        afficherFacture();
    };

