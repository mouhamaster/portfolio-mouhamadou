import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   email='faye4870@gmail.com';
  submitted = false;
  success = false;
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {} 
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Message envoyé:', this.contactForm.value);
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
      setTimeout(() => this.success = false, 3000);
    }
  }
  skills = [
    { name: 'C#|Asp.Net', level: 85 },
    { name: 'Java|Spring Boot', level: 75 },
    { name: 'Angular', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'MySQL', level: 90 },
    { name: 'MSSQL', level: 90 },
    { name: 'Bootstrap', level: 85 }
  ];
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
