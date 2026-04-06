// Portfolio Main JavaScript File
console.log('🚀 Loading portfolio JavaScript...');

// ============================================
// TECH STACK TREE - Expand/Collapse
// ============================================
function toggleCategory(header) {
    console.log('Toggling category:', header);
    header.classList.toggle('active');
    const content = header.nextElementSibling;
    if (!content) return;
    
    if (header.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = '0';
    }
}

// ============================================
// PORTFOLIO FILTER
// ============================================
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    console.log('📋 Portfolio filters initialized');
    console.log(`Found ${filterBtns.length} filter buttons`);
    console.log(`Found ${projectCards.length} project cards`);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            console.log('Filter clicked:', filter);
            
            // Remove active from all, add to clicked
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all') {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    if (categories && categories.includes(filter)) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// ============================================
// PROJECT MODAL DATA
// ============================================
const projectData = {
    'aws-connect': {
        icon: '📞',
        title: 'AWS Connect Contact Center Platform',
        category: 'aws-connect aws fullstack',
        description: 'Designed and deployed enterprise-scale contact center solution integrating AWS Connect with Amazon Lex for intelligent IVR workflows. Implemented call recording, contact flow routing, and agent queues with dynamic configuration through parameterized Lambda functions. Automated user provisioning and queue assignment using Amazon Connect API, improving onboarding efficiency.',
        highlights: [
            'Real-time customer support automation with intelligent routing',
            'Automated user provisioning & queue assignment reducing manual work by 40%',
            'Centralized logging via CloudWatch for complete observability',
            'Parameterized Lambda functions for dynamic call flow configuration'
        ],
        tech: ['AWS Connect', 'Amazon Lex', 'Lambda (Node.js)', 'DynamoDB', 'S3', 'CloudWatch', 'IVR Workflows', 'API Gateway']
    },
    'lex-bot': {
        icon: '🤖',
        title: 'Intelligent Lex Bot & Agentic AI Integration',
        category: 'aws-connect aws backend',
        description: 'Developed custom AWS Lambda functions in Node.js to enhance AWS Connect with intelligent conversational AI. Built Lex bots for automated call routing and customer intent recognition, implementing agentic AI patterns for real-time decision making. Utilized GraphQL subscriptions for real-time data updates and notifications.',
        highlights: [
            'Automated IVR interactions with Natural Language Understanding',
            'Real-time analytics integration for intelligent decision making',
            '60% improvement in call routing efficiency through AI-powered intent recognition',
            'GraphQL subscriptions for live updates and seamless user experience'
        ],
        tech: ['Amazon Lex', 'AWS Lambda', 'Node.js', 'Agentic AI', 'GraphQL', 'DynamoDB', 'CloudWatch', 'NLU']
    },
    'microservices': {
        icon: '🏗️',
        title: 'Enterprise Monolith to Microservices Migration',
        category: 'fullstack backend aws',
        description: 'Led the migration of legacy monolithic applications to cloud-native microservices architecture. Orchestrated deployment using Docker containers and Kubernetes clusters, implementing Spring Boot microservices with RESTful APIs hosted on AWS. Established comprehensive CI/CD pipelines and automated testing frameworks.',
        highlights: [
            'Decomposed monolith into 15+ independent microservices',
            '99.9% uptime achieved with auto-scaling and high availability',
            '70% faster deployment cycles with automated CI/CD pipelines',
            'Reduced infrastructure costs by 35% through efficient resource utilization'
        ],
        tech: ['Spring Boot', 'Kubernetes', 'Docker', 'AWS ECS', 'Terraform', 'Jenkins CI/CD', 'Hibernate', 'RESTful APIs']
    },
    'angular-dashboard': {
        icon: '📊',
        title: 'Real-Time Business Analytics Dashboard',
        category: 'fullstack aws',
        description: 'Built enterprise Single Page Application using Angular and Angular Material for exposing business transactional data through custom dashboards. Integrated with Spring Boot microservices and implemented real-time updates using GraphQL subscriptions. Created automation scripts using Protractor and Karma for comprehensive testing coverage.',
        highlights: [
            'Real-time data visualization with GraphQL subscriptions and WebSocket connections',
            'Responsive design with Angular Material components for seamless UX',
            '50K+ daily active users accessing critical business metrics',
            '80% test coverage achieved with Protractor and Karma automation'
        ],
        tech: ['Angular', 'Angular Material', 'GraphQL', 'Spring Boot', 'DynamoDB', 'Protractor', 'Karma', 'WebSocket']
    },
    'serverless-api': {
        icon: '⚡',
        title: 'Serverless API Platform with Lambda & DynamoDB',
        category: 'backend aws',
        description: 'Architected serverless API layer using AWS Lambda functions (Node.js) for CRUD operations on DynamoDB. Implemented API Gateway for rate limiting, throttling, and security policies. Built highly scalable solution processing over 100K+ requests daily with sub-100ms response times.',
        highlights: [
            '100% serverless architecture eliminating server management overhead',
            'Sub-100ms response times with Lambda optimization techniques',
            'Cost reduction of 60% compared to traditional EC2-based infrastructure',
            'Auto-scaling to handle traffic spikes seamlessly'
        ],
        tech: ['AWS Lambda', 'Node.js', 'DynamoDB', 'API Gateway', 'CloudWatch', 'S3', 'Rate Limiting']
    },
    'terraform': {
        icon: '🏛️',
        title: 'Terraform Infrastructure Automation',
        category: 'aws backend',
        description: 'Developed reusable Terraform modules and scripts to automate AWS resource provisioning for contact center environment. Implemented infrastructure as code for AWS Connect instances, Lambda functions, and networking configurations. Established version-controlled IaC workflows with automated deployment pipelines.',
        highlights: [
            'Automated deployment across 5+ environments (Dev, QA, Staging, Prod)',
            '90% reduction in infrastructure provisioning time',
            'Consistent infrastructure configuration eliminating manual errors',
            'Version-controlled IaC workflows enabling rollback and audit trails'
        ],
        tech: ['Terraform', 'AWS', 'CloudFormation', 'VSTS', 'Git', 'Jenkins', 'Infrastructure as Code']
    },
    'etl-pipeline': {
        icon: '📈',
        title: 'ETL Pipeline & Business Intelligence Platform',
        category: 'backend aws',
        description: 'Created ETL jobs using Pentaho and Talend for business analysis reports. Processed millions of records daily from multiple data sources, transforming and loading into data warehouses for real-time analytics. Implemented automated workflows for data validation and quality checks.',
        highlights: [
            'Processing 5M+ records daily from diverse data sources',
            'Real-time data transformation with complex business logic',
            'Automated reporting workflows reducing manual effort by 85%',
            'Data quality checks ensuring 99.5% accuracy in reports'
        ],
        tech: ['Pentaho', 'Talend', 'DynamoDB', 'S3', 'Lambda', 'CloudWatch', 'ETL', 'Data Warehousing']
    },
    'react-portal': {
        icon: '🌐',
        title: 'Customer Self-Service Portal (React)',
        category: 'fullstack aws',
        description: 'Built modern customer-facing web application using React with Redux for state management. Integrated with Spring Boot microservices backend, implementing real-time features using GraphQL and WebSocket connections. Achieved 95+ Lighthouse performance score with optimized bundle sizes and lazy loading.',
        highlights: [
            '200K+ monthly active users with high engagement rates',
            '95+ Lighthouse performance score through optimization techniques',
            'Real-time notifications via WebSocket for instant updates',
            'Responsive mobile-first design with PWA capabilities'
        ],
        tech: ['React', 'Redux', 'Spring Boot', 'GraphQL', 'AWS', 'Docker', 'Jest', 'WebSocket', 'PWA']
    },
    'monitoring': {
        icon: '🔍',
        title: 'Enterprise Monitoring & Observability Platform',
        category: 'backend aws',
        description: 'Implemented comprehensive monitoring and logging solutions using AWS CloudWatch, Prometheus, and ELK Stack. Established centralized logging and distributed tracing for microservices, ensuring 99.9% system availability. Built custom dashboards for real-time performance tracking and alerting.',
        highlights: [
            '99.9% system uptime achieved through proactive monitoring',
            'Real-time alerting & notifications for critical incidents',
            'Performance tracking for 50+ microservices with detailed metrics',
            'Mean Time To Recovery (MTTR) reduced by 75% with better visibility'
        ],
        tech: ['CloudWatch', 'Prometheus', 'ELK Stack', 'Grafana', 'Kubernetes', 'Docker', 'Distributed Tracing']
    },
    'kubernetes': {
        icon: '☸️',
        title: 'Kubernetes Microservices Orchestration',
        category: 'backend aws',
        description: 'Implemented Kubernetes clusters to orchestrate containerized microservices, enabling efficient resource utilization and high availability. Configured deployments, services, ingress controllers, and auto-scaling policies. Managed 30+ microservices with zero-downtime deployment strategies.',
        highlights: [
            'Managing 30+ microservices with centralized orchestration',
            'Auto-scaling based on load with Horizontal Pod Autoscaler',
            'Zero-downtime deployments using rolling updates and blue-green strategies',
            '50% improved resource utilization through efficient pod scheduling'
        ],
        tech: ['Kubernetes', 'Docker', 'Helm', 'Ingress', 'AWS EKS', 'Terraform', 'HPA', 'Service Mesh']
    }
};

// ============================================
// PROJECT MODAL FUNCTIONS
// ============================================
function openProjectModal(projectId) {
    console.log('🎯 Opening modal for project:', projectId);
    
    const project = projectData[projectId];
    if (!project) {
        console.error('❌ Project not found:', projectId);
        return;
    }
    
    const modal = document.getElementById('project-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (!modal || !overlay) {
        console.error('❌ Modal elements not found');
        return;
    }
    
    // Set modal content
    document.getElementById('modal-icon').textContent = project.icon;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    
    // Set highlights
    const highlightsContainer = document.getElementById('modal-highlights');
    highlightsContainer.innerHTML = project.highlights
        .map(highlight => `<div class="modal-highlight-item">${highlight}</div>`)
        .join('');
    
    // Set tech tags
    const techContainer = document.getElementById('modal-tech-tags');
    techContainer.innerHTML = project.tech
        .map(tech => `<span class="modal-tech-tag">${tech}</span>`)
        .join('');
    
    // Show modal
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Modal opened successfully');
}

function closeModal() {
    console.log('❌ Closing modal');
    
    const modal = document.getElementById('project-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (modal && overlay) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('✅ Modal closed successfully');
    }
}

// ============================================
// INITIALIZE EVERYTHING ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM Content Loaded - Initializing portfolio...');
    
    // Initialize portfolio filters
    initPortfolioFilters();
    
    // Initialize modal close handlers
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
        console.log('✅ Overlay click handler attached');
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    console.log('✅ Escape key handler attached');
    
    // Add click handlers to project cards
    const projectCards = document.querySelectorAll('.project-card');
    console.log(`📋 Found ${projectCards.length} project cards`);
    
    projectCards.forEach((card, index) => {
        const projectId = card.getAttribute('data-project-id');
        console.log(`Card ${index + 1}: ${projectId}`);
        
        card.addEventListener('click', function() {
            console.log('🖱️ Card clicked:', projectId);
            if (projectId) {
                openProjectModal(projectId);
            } else {
                console.error('❌ No project ID on card');
            }
        });
    });
    
    console.log('✅ All event listeners attached');
    console.log('🎉 Portfolio fully initialized and ready!');
});

console.log('✅ JavaScript file loaded successfully');
