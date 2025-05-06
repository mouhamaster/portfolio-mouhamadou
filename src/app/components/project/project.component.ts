import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      title: 'EFA-tech: Votre Partenaire Technologique de Confiance',
      description: 'EFA-tech est une entreprise spécialisée dans le développement de solutions technologiques sur mesure pour les entreprises.',
      technologies: ['Wordpress'],
      image: 'assets/images/tech.jpg',
      link: 'https://efa-tech.net/'
    },
    {
      title: 'Plateforme E-commerce',
      description: 'Solution complète de vente en ligne avec paiement sécurisé.',
      technologies: ['ASP.NET', 'MSSQL'],
      image: 'assets/images/shop.jpg',
      link: 'https://unipaylive.net/'
    },
    {
      title: 'Application de Betting Online',
      description: 'L’application de Betting Online est une plateforme numérique permettant aux utilisateurs de parier en temps réel sur divers événements sportifs (football, tennis, basketball, etc.)',
      technologies: ['ASP.NET', 'MSSQL', 'Flutter'],
      image: 'assets/images/bet.jpg',
      link: '#'
    },
    {
      title: 'Pateforme Agro Sénégal',
      description: 'Agro Sénégal LP est une plateforme agroalimentaire, portée vers l\'échange ainsi que la vente des produits agroalimentaires.',
      technologies: ['ASP.NET', 'MSSQL'],
      image: 'assets/images/agro.jpg',
      link: 'https://agrosenlp.com/'
    },
    {
      title: 'Application de Digital Banking',
      description: 'L’application de Digital Banking est une solution bancaire en ligne qui permet aux utilisateurs de gérer leurs comptes bancaires à distance via une interface intuitive et sécurisée',
      technologies: ['Spring Boot', 'Angular', 'MySQL'],
      image: 'assets/images/agro.jpg',
      link: '#'
    },
   
    {
      title: 'Site Web Club Aquazim Ngor',
      description: 'Site Web du Club Aquazim Ngor est une plateforme numérique dédiée à la promotion des activités aquatiques et sportives.',
      technologies: ['Wordpress'],
      image: 'assets/images/agro.jpg',
      link: 'https://aquagym-ngor.com/'
    }
  ];
}
