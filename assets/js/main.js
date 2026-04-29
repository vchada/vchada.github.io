// Portfolio Main JavaScript File
console.log('Loading portfolio JavaScript...');

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
    
    console.log('Portfolio filters initialized');
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
        icon: 'CC',
        title: 'AWS Connect Contact Center Platform',
        category: 'aws-connect aws fullstack',
        description: 'Designed and delivered an enterprise contact center platform on AWS Connect, pairing intelligent IVR flows with Amazon Lex, Lambda, DynamoDB, S3, and CloudWatch. The solution standardized routing, queue management, call recording, user provisioning, and operational visibility for a high-volume support environment.',
        details: [
            'Built reusable contact-flow patterns and Lambda-driven configuration so routing behavior could be adjusted without manual console work.',
            'Integrated Amazon Connect APIs for user provisioning, queue assignment, and operational administration across environments.',
            'Established CloudWatch logging and metrics to support faster troubleshooting, auditability, and production support.'
        ],
        architecture: ['Customer Call', 'AWS Connect', 'Lex + Lambda', 'Agent Desktop'],
        highlights: [
            'Real-time customer support automation with intelligent routing',
            'Automated user provisioning & queue assignment reducing manual work by 40%',
            'Centralized logging via CloudWatch for complete observability',
            'Parameterized Lambda functions for dynamic call flow configuration'
        ],
        tech: ['AWS Connect', 'Amazon Lex', 'Lambda (Node.js)', 'DynamoDB', 'S3', 'CloudWatch', 'IVR Workflows', 'API Gateway']
        ,techGroups: {
            Cloud: ['AWS Connect', 'Lambda', 'S3', 'CloudWatch'],
            Intelligence: ['Amazon Lex', 'IVR Workflows'],
            Data: ['DynamoDB', 'API Gateway']
        }
    },
    'lex-bot': {
        icon: 'AI',
        title: 'Intelligent Lex Bot & Agentic AI Integration',
        category: 'aws-connect aws backend',
        description: 'Developed conversational automation for AWS Connect using Amazon Lex, Node.js Lambda functions, and real-time integration patterns. The work focused on recognizing customer intent, improving IVR containment, and giving agents cleaner context before live handoff.',
        details: [
            'Modeled Lex intents and fulfillment flows for common service journeys, reducing repetitive agent handling.',
            'Used Lambda orchestration to evaluate context, retrieve supporting data, and select the next best routing action.',
            'Supported real-time updates with GraphQL subscriptions so operational teams could monitor interaction state changes as they happened.'
        ],
        architecture: ['Intent Signal', 'Lex Bot', 'LLM / Lambda', 'Route Decision'],
        highlights: [
            'Automated IVR interactions with Natural Language Understanding',
            'Real-time analytics integration for intelligent decision making',
            '60% improvement in call routing efficiency through AI-powered intent recognition',
            'GraphQL subscriptions for live updates and seamless user experience'
        ],
        tech: ['Amazon Lex', 'AWS Lambda', 'Node.js', 'Agentic AI', 'GraphQL', 'DynamoDB', 'CloudWatch', 'NLU']
        ,techGroups: {
            AI: ['Amazon Lex', 'Agentic AI', 'NLU'],
            Runtime: ['AWS Lambda', 'Node.js'],
            Integration: ['GraphQL', 'DynamoDB', 'CloudWatch']
        }
    },
    'microservices': {
        icon: 'MS',
        title: 'Enterprise Monolith to Microservices Migration',
        category: 'fullstack backend aws',
        description: 'Led modernization of legacy Java applications into cloud-ready Spring Boot microservices with REST APIs, containerized deployments, and automated delivery pipelines. The migration improved release independence, service resilience, and operational scale while preserving critical business workflows.',
        details: [
            'Separated domain capabilities into independently deployable services with clear API boundaries and persistence ownership.',
            'Containerized services with Docker and orchestrated deployment through Kubernetes and AWS infrastructure.',
            'Strengthened delivery with Jenkins CI/CD, automated tests, and environment-specific release controls.'
        ],
        architecture: ['Legacy Domain', 'API Boundary', 'Spring Service', 'Kubernetes'],
        highlights: [
            'Decomposed monolith into 15+ independent microservices',
            '99.9% uptime achieved with auto-scaling and high availability',
            '70% faster deployment cycles with automated CI/CD pipelines',
            'Reduced infrastructure costs by 35% through efficient resource utilization'
        ],
        tech: ['Spring Boot', 'Kubernetes', 'Docker', 'AWS ECS', 'Terraform', 'Jenkins CI/CD', 'Hibernate', 'RESTful APIs']
        ,techGroups: {
            Services: ['Spring Boot', 'REST APIs', 'Hibernate'],
            Platform: ['Kubernetes', 'Docker', 'AWS ECS'],
            Delivery: ['Terraform', 'Jenkins CI/CD']
        }
    },
    'angular-dashboard': {
        icon: 'BI',
        title: 'Real-Time Business Analytics Dashboard',
        category: 'fullstack aws',
        description: 'Built an enterprise analytics dashboard with Angular, Angular Material, Spring Boot services, and GraphQL subscriptions. The application turned transactional data into usable operational views for business users who needed fast, reliable access to live metrics.',
        details: [
            'Designed responsive dashboard screens with reusable Angular components and consistent Material patterns.',
            'Integrated GraphQL subscriptions for live updates while keeping backend services maintainable through Spring Boot APIs.',
            'Added Protractor and Karma coverage around key workflows to improve confidence during frequent releases.'
        ],
        architecture: ['Angular UI', 'GraphQL', 'Spring APIs', 'Live Metrics'],
        highlights: [
            'Real-time data visualization with GraphQL subscriptions and WebSocket connections',
            'Responsive design with Angular Material components for seamless UX',
            '50K+ daily active users accessing critical business metrics',
            '80% test coverage achieved with Protractor and Karma automation'
        ],
        tech: ['Angular', 'Angular Material', 'GraphQL', 'Spring Boot', 'DynamoDB', 'Protractor', 'Karma', 'WebSocket']
        ,techGroups: {
            Frontend: ['Angular', 'Angular Material'],
            APIs: ['GraphQL', 'Spring Boot', 'WebSocket'],
            Quality: ['DynamoDB', 'Protractor', 'Karma']
        }
    },
    'serverless-api': {
        icon: 'API',
        title: 'Serverless API Platform with Lambda & DynamoDB',
        category: 'backend aws',
        description: 'Architected a serverless API platform using API Gateway, Node.js Lambda functions, DynamoDB, S3, and CloudWatch. The platform supported scalable CRUD operations, request governance, and production-grade monitoring without the overhead of managing application servers.',
        details: [
            'Designed Lambda handlers and DynamoDB access patterns for predictable latency and scalable read/write behavior.',
            'Configured API Gateway policies for throttling, rate limiting, and secure access to backend capabilities.',
            'Instrumented the platform with CloudWatch logs and metrics to support alerting and operational diagnostics.'
        ],
        architecture: ['API Gateway', 'Lambda', 'DynamoDB', 'CloudWatch'],
        highlights: [
            '100% serverless architecture eliminating server management overhead',
            'Sub-100ms response times with Lambda optimization techniques',
            'Cost reduction of 60% compared to traditional EC2-based infrastructure',
            'Auto-scaling to handle traffic spikes seamlessly'
        ],
        tech: ['AWS Lambda', 'Node.js', 'DynamoDB', 'API Gateway', 'CloudWatch', 'S3', 'Rate Limiting']
        ,techGroups: {
            Serverless: ['AWS Lambda', 'Node.js', 'API Gateway'],
            Data: ['DynamoDB', 'S3'],
            Operations: ['CloudWatch', 'Rate Limiting']
        }
    },
    'terraform': {
        icon: 'IaC',
        title: 'Terraform Infrastructure Automation',
        category: 'aws backend',
        description: 'Created reusable Terraform modules and automation workflows for AWS infrastructure provisioning. The work brought consistency, repeatability, and version control to environments supporting contact center, Lambda, networking, and integration resources.',
        details: [
            'Built parameterized Terraform modules that could be reused across development, QA, staging, and production environments.',
            'Connected infrastructure changes to source control and CI/CD workflows for reviewable, repeatable deployments.',
            'Reduced manual provisioning risk by codifying resource configuration and environment-specific inputs.'
        ],
        architecture: ['Git Change', 'Terraform Plan', 'Approval', 'AWS Provision'],
        highlights: [
            'Automated deployment across 5+ environments (Dev, QA, Staging, Prod)',
            '90% reduction in infrastructure provisioning time',
            'Consistent infrastructure configuration eliminating manual errors',
            'Version-controlled IaC workflows enabling rollback and audit trails'
        ],
        tech: ['Terraform', 'AWS', 'CloudFormation', 'VSTS', 'Git', 'Jenkins', 'Infrastructure as Code']
        ,techGroups: {
            IaC: ['Terraform', 'CloudFormation', 'Infrastructure as Code'],
            Cloud: ['AWS'],
            Pipeline: ['Git', 'Jenkins', 'VSTS']
        }
    },
    'etl-pipeline': {
        icon: 'ETL',
        title: 'ETL Pipeline & Business Intelligence Platform',
        category: 'backend aws',
        description: 'Developed ETL and reporting workflows with Pentaho, Talend, AWS services, and automated validation steps. The platform consolidated data from multiple sources into analytics-ready structures for business reporting and operational insight.',
        details: [
            'Implemented transformation jobs to normalize, enrich, and load high-volume datasets into downstream reporting stores.',
            'Added validation and quality checks to catch data issues before reports reached business users.',
            'Automated recurring data processing workflows to reduce manual effort and improve reporting reliability.'
        ],
        architecture: ['Source Data', 'ETL Jobs', 'Validation', 'BI Reports'],
        highlights: [
            'Processing 5M+ records daily from diverse data sources',
            'Real-time data transformation with complex business logic',
            'Automated reporting workflows reducing manual effort by 85%',
            'Data quality checks ensuring 99.5% accuracy in reports'
        ],
        tech: ['Pentaho', 'Talend', 'DynamoDB', 'S3', 'Lambda', 'CloudWatch', 'ETL', 'Data Warehousing']
        ,techGroups: {
            ETL: ['Pentaho', 'Talend', 'ETL'],
            AWS: ['Lambda', 'S3', 'CloudWatch'],
            Data: ['DynamoDB', 'Data Warehousing']
        }
    },
    'react-portal': {
        icon: 'UX',
        title: 'Customer Self-Service Portal (React)',
        category: 'fullstack aws',
        description: 'Built a customer self-service portal with React, Redux, Spring Boot APIs, GraphQL, and AWS-backed services. The portal emphasized fast interactions, responsive design, and real-time account updates for a large user base.',
        details: [
            'Structured React and Redux state flows to keep customer journeys predictable and maintainable.',
            'Integrated GraphQL and WebSocket-based updates for timely notifications and status changes.',
            'Improved frontend performance through bundle optimization, lazy loading, and mobile-first UI decisions.'
        ],
        architecture: ['React Portal', 'Redux State', 'Spring APIs', 'Realtime Updates'],
        highlights: [
            '200K+ monthly active users with high engagement rates',
            '95+ Lighthouse performance score through optimization techniques',
            'Real-time notifications via WebSocket for instant updates',
            'Responsive mobile-first design with PWA capabilities'
        ],
        tech: ['React', 'Redux', 'Spring Boot', 'GraphQL', 'AWS', 'Docker', 'Jest', 'WebSocket', 'PWA']
        ,techGroups: {
            Frontend: ['React', 'Redux', 'PWA'],
            APIs: ['Spring Boot', 'GraphQL', 'WebSocket'],
            Platform: ['AWS', 'Docker', 'Jest']
        }
    },
    'monitoring': {
        icon: 'OBS',
        title: 'Enterprise Monitoring & Observability Platform',
        category: 'backend aws',
        description: 'Implemented a monitoring and observability platform using CloudWatch, Prometheus, ELK, Grafana, and distributed tracing practices. The solution helped engineering and operations teams detect issues earlier, investigate incidents faster, and measure service health consistently.',
        details: [
            'Centralized logs and service metrics across microservices to reduce blind spots in production support.',
            'Built dashboards and alerting paths for availability, latency, error rates, and infrastructure saturation.',
            'Introduced tracing and correlation practices that shortened incident investigation across distributed services.'
        ],
        architecture: ['Services', 'Metrics + Logs', 'Dashboards', 'Alerts'],
        highlights: [
            '99.9% system uptime achieved through proactive monitoring',
            'Real-time alerting & notifications for critical incidents',
            'Performance tracking for 50+ microservices with detailed metrics',
            'Mean Time To Recovery (MTTR) reduced by 75% with better visibility'
        ],
        tech: ['CloudWatch', 'Prometheus', 'ELK Stack', 'Grafana', 'Kubernetes', 'Docker', 'Distributed Tracing']
        ,techGroups: {
            Metrics: ['CloudWatch', 'Prometheus', 'Grafana'],
            Logs: ['ELK Stack', 'Distributed Tracing'],
            Runtime: ['Kubernetes', 'Docker']
        }
    },
    'kubernetes': {
        icon: 'K8s',
        title: 'Kubernetes Microservices Orchestration',
        category: 'backend aws',
        description: 'Implemented Kubernetes orchestration for containerized microservices, including deployments, services, ingress, autoscaling, and release strategies. The platform improved resource utilization and enabled more reliable application delivery across distributed services.',
        details: [
            'Defined Kubernetes deployment and service configurations for consistent rollout and service discovery.',
            'Configured ingress, scaling policies, and release strategies to support resilient production operations.',
            'Used Terraform and Helm patterns to keep cluster resources reproducible and easier to maintain.'
        ],
        architecture: ['Container', 'Helm Chart', 'EKS Cluster', 'Autoscale'],
        highlights: [
            'Managing 30+ microservices with centralized orchestration',
            'Auto-scaling based on load with Horizontal Pod Autoscaler',
            'Zero-downtime deployments using rolling updates and blue-green strategies',
            '50% improved resource utilization through efficient pod scheduling'
        ],
        tech: ['Kubernetes', 'Docker', 'Helm', 'Ingress', 'AWS EKS', 'Terraform', 'HPA', 'Service Mesh']
        ,techGroups: {
            Orchestration: ['Kubernetes', 'AWS EKS', 'HPA'],
            Packaging: ['Docker', 'Helm'],
            Network: ['Ingress', 'Terraform', 'Service Mesh']
        }
    }
};

window.portfolioProjectData = projectData;

const experienceData = {
    geico: {
        company: 'GEICO',
        role: 'Staff Engineer',
        logo: 'assets/images/geico-logo.png',
        url: 'https://www.geico.com/',
        project: 'Telecommunications Engineering, AWS Connect IVR, Cloud Contact Portal',
        products: [
            { name: 'GEICO insurance products', url: 'https://www.geico.com/' },
            { name: 'GEICO claims and service workflows', url: 'https://www.geico.com/claims/' }
        ],
        summary: [
            'Led architecture and development for enterprise IVR modernization across BOAT, Claims, MOAT, and service-center workflows.',
            'Built AWS Connect contact flows, Amazon Lex V2 bots, Lambda services, API Gateway integrations, and agent-facing CCP experiences in React and Angular.',
            'Integrated Agentic AI and LLM-powered assistants to reason over caller intent, retrieve context through Spring Boot services, and recommend better routing decisions.'
        ]
    },
    sec: {
        company: 'U.S. Securities and Exchange Commission',
        role: 'Sr. Full Stack Developer',
        logo: 'assets/images/sec-logo.png',
        url: 'https://www.sec.gov/',
        project: 'EDGAR filing, search, validation, and reporting platform',
        products: [
            { name: 'EDGAR company filings', url: 'https://www.sec.gov/edgar/search/' },
            { name: 'SEC public data and research', url: 'https://www.sec.gov/data-research' }
        ],
        summary: [
            'Built Spring Cloud microservices and Angular Material interfaces for EDGAR filing workflows.',
            'Implemented search and document-discovery capabilities with Apache Lucene and Solr across large filing datasets.',
            'Supported observability, reporting, and infrastructure automation through CloudWatch, Splunk, Terraform, Git, and Agile delivery practices.'
        ]
    },
    comcast: {
        company: 'Comcast Business',
        role: 'Full Stack Developer',
        logo: 'assets/images/comcast-logo.png',
        url: 'https://business.comcast.com/',
        project: 'KEB marketing intelligence and field representative platform',
        products: [
            { name: 'Comcast Business internet and connectivity', url: 'https://business.comcast.com/' },
            { name: 'Comcast Business company and solutions overview', url: 'https://business.comcast.com/about-us' }
        ],
        summary: [
            'Developed KEB, a marketing intelligence platform for identifying commercial prospects and creating targeted outreach opportunities.',
            'Built ETL pipelines with Pentaho, Talend, and AWS Glue to normalize third-party business datasets.',
            'Delivered Spring Boot APIs, Angular dashboards, caching layers, Terraform infrastructure, and CI/CD workflows for scalable field operations.'
        ]
    },
    ndgroup: {
        company: 'The Norfolk & Dedham Group',
        role: 'Software Engineer',
        logo: 'assets/images/ndgroup-logo.png',
        url: 'https://www.ndgroup.com/',
        project: 'AgentPak property and casualty insurance platform',
        products: [
            { name: 'N&D personal and business insurance', url: 'https://www.ndgroup.com/' },
            { name: 'My Insurance customer portal', url: 'https://www.ndgroup.com/' }
        ],
        summary: [
            'Contributed to AgentPak, a web platform for creating, updating, and managing property and casualty insurance policies.',
            'Built Spring Boot microservices with Netflix OSS patterns including Eureka, Ribbon, and Hystrix.',
            'Migrated legacy Struts modules toward Spring MVC and Angular to reduce technical debt and improve agent usability.'
        ]
    },
    'state-street': {
        company: 'State Street',
        role: 'Sr. Full Stack Developer',
        logo: 'assets/images/state-street-logo.png',
        url: 'https://www.statestreet.com/us/en',
        project: 'LiveTrial hedge fund analytics and performance reporting platform',
        products: [
            { name: 'State Street investment servicing', url: 'https://www.statestreet.com/us/en/discover/investment-servicing' },
            { name: 'State Street investor servicing', url: 'https://www.statestreet.com/us/en/asset-manager/solutions/investor-servicing' }
        ],
        summary: [
            'Worked on LiveTrial, a mission-critical platform for hedge fund analytics, debt allocations, and institutional investment positions.',
            'Built RESTful services with Spring MVC and Struts and delivered widget-based dashboards with Google Web Toolkit.',
            'Engineered multithreaded Java components for performance calculations and supported production observability with Splunk and AppDynamics.'
        ]
    },
    'ca-technologies': {
        company: 'CA Technologies',
        role: 'Java Developer',
        logo: 'assets/images/ca-technologies-logo.png',
        url: 'https://www.broadcom.com/',
        project: 'Arcserve backup and recovery plus erwin Data Modeler platform work',
        products: [
            { name: 'Arcserve data protection', url: 'https://www.arcserve.com/' },
            { name: 'erwin Data Modeler', url: 'https://www.erwin.com/products/erwin-data-modeler/' },
            { name: 'Broadcom enterprise software', url: 'https://www.broadcom.com/products/software' }
        ],
        summary: [
            'Built and maintained Java, Spring Boot, REST API, and front-end modules for enterprise infrastructure software products.',
            'Contributed to Arcserve scheduling, job orchestration, and backup-policy modules for data protection workflows.',
            'Supported erwin Data Modeler automation and schema-deployment components for Oracle and SQL Server environments.'
        ]
    }
};

window.portfolioExperienceData = experienceData;

const blogData = {
    'spring-lambda': {
        title: 'Why Spring Boot and AWS Lambda Work So Well Together',
        meta: 'Oct 15, 2024 · 8 min · Spring Boot / AWS Lambda / Microservices',
        diagram: ['API Request', 'Spring Cloud Function', 'Lambda Runtime', 'DynamoDB + CloudWatch'],
        checklist: [
            'Use Lambda for focused workflow steps, not giant application replicas.',
            'Keep domain logic testable outside the cloud runtime.',
            'Track cold starts, retries, idempotency, and correlation IDs from day one.'
        ],
        tradeoffs: [
            ['Strength', 'Elastic scale and low operational overhead for event-driven workloads.'],
            ['Watch out', 'Java cold starts and oversized dependency graphs can quietly hurt latency.'],
            ['Best fit', 'APIs, adapters, processors, async jobs, and integration steps.']
        ],
        sections: [
            {
                heading: 'The idea',
                body: 'Spring Boot gives enterprise teams a familiar way to structure business logic, validation, configuration, and testing. Lambda gives that logic an elastic runtime where teams can scale around demand instead of managing always-on servers.'
            },
            {
                heading: 'Where it works best',
                body: 'The pattern is strongest for focused services: event handlers, lightweight APIs, workflow steps, file processors, and integration adapters. The trick is to keep each function small enough to reason about while still using Spring conventions where they add value.'
            },
            {
                heading: 'Production lessons',
                body: 'Cold starts, retries, idempotency, and tracing need deliberate design. I prefer explicit correlation IDs, CloudWatch dashboards, alarms around failure patterns, and provisioned concurrency only where latency truly matters.'
            }
        ]
    },
    migration: {
        title: 'From Monolith to Microservices Without Breaking the Business',
        meta: 'Sep 28, 2024 · 10 min · AWS / Migration / Architecture',
        diagram: ['Monolith', 'Strangler Route', 'Domain Service', 'Event Backbone'],
        checklist: [
            'Extract by business capability, not by technical layer.',
            'Put observability and rollback paths in place before traffic moves.',
            'Decompose data only when ownership and consistency rules are clear.'
        ],
        tradeoffs: [
            ['Strength', 'Smaller deployments, clearer ownership, and independent scaling.'],
            ['Watch out', 'Distributed transactions, duplicate models, and operational complexity.'],
            ['Best fit', 'Domains with changing requirements, scaling pressure, or release bottlenecks.']
        ],
        sections: [
            {
                heading: 'Start with business seams',
                body: 'The safest migrations begin with bounded contexts rather than framework enthusiasm. I look for capabilities with clear ownership, measurable pain, and enough independence to extract without destabilizing the rest of the system.'
            },
            {
                heading: 'Make rollback boring',
                body: 'API Gateway routing, feature flags, database compatibility windows, and observability make the migration survivable. A good migration plan assumes something will surprise you and makes retreat cheap.'
            },
            {
                heading: 'What success looks like',
                body: 'The win is not simply more services. The win is faster delivery, clearer ownership, smaller releases, better scaling, and production signals that tell teams what is happening before customers do.'
            }
        ]
    },
    'terraform-jenkins': {
        title: 'Terraform and Jenkins: Infrastructure Changes You Can Trust',
        meta: 'Sep 10, 2024 · 7 min · Terraform / Jenkins / DevOps',
        diagram: ['Pull Request', 'Jenkins Plan', 'Human Approval', 'Terraform Apply'],
        checklist: [
            'Make every infrastructure change produce a readable plan.',
            'Protect state, separate environments, and keep secrets outside code.',
            'Promote the same module version through dev, QA, staging, and production.'
        ],
        tradeoffs: [
            ['Strength', 'Repeatable provisioning with a clear review trail.'],
            ['Watch out', 'State drift, broad permissions, and unreviewed manual console edits.'],
            ['Best fit', 'Cloud teams that need auditability and consistent environments.']
        ],
        sections: [
            {
                heading: 'Infrastructure needs a paper trail',
                body: 'Terraform turns cloud resources into reviewed code. Jenkins adds repeatable execution, plan visibility, promotion gates, and a consistent path from development to production.'
            },
            {
                heading: 'The workflow',
                body: 'Every change should produce a plan, store logs, and make drift visible. Environment inputs should be explicit, secrets should stay out of code, and state should be protected like production data.'
            },
            {
                heading: 'The payoff',
                body: 'Teams move faster because they stop guessing. Provisioning becomes predictable, rollbacks become possible, and compliance conversations become easier because every change has context.'
            }
        ]
    },
    fullstack: {
        title: 'Full Stack Enterprise Apps Need More Than Clean Screens',
        meta: 'Aug 22, 2024 · 9 min · Java / React / Enterprise Delivery',
        diagram: ['User Workflow', 'Frontend State', 'Java API', 'Support Signals'],
        checklist: [
            'Start with the workflow, then design the API contract.',
            'Make loading, error, empty, and permission states first-class UI states.',
            'Ship logs, metrics, traces, and tests with the feature.'
        ],
        tradeoffs: [
            ['Strength', 'Teams can move faster when UI, API, and operations are designed together.'],
            ['Watch out', 'Clean screens still fail if data contracts and support paths are weak.'],
            ['Best fit', 'Internal tools, customer portals, dashboards, and regulated workflows.']
        ],
        sections: [
            {
                heading: 'The interface is only one layer',
                body: 'Enterprise apps need clear user flows, stable contracts, accessible screens, reliable APIs, predictable errors, and enough telemetry for support teams to understand production behavior.'
            },
            {
                heading: 'How I structure delivery',
                body: 'I start with the workflow and data contract, then build reusable UI components, Spring Boot services, validation, tests, and deployment checks around that contract.'
            },
            {
                heading: 'What makes it maintainable',
                body: 'Good full stack systems are easy to change without fear. That comes from typed boundaries, meaningful tests, traceable logs, operational dashboards, and a UI that explains state clearly.'
            }
        ]
    }
};

window.portfolioBlogData = blogData;

// ============================================
// PROJECT MODAL FUNCTIONS
// ============================================
function openProjectModal(projectId) {
    console.log('Opening modal for project:', projectId);
    
    const project = projectData[projectId];
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    const modal = document.getElementById('project-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (!modal || !overlay) {
        console.error('Modal elements not found');
        return;
    }
    
    // Set modal content
    document.getElementById('modal-icon').textContent = project.icon;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;

    const detailsContainer = document.getElementById('modal-details');
    if (detailsContainer) {
        detailsContainer.innerHTML = (project.details || [])
            .map(detail => `<li>${detail}</li>`)
            .join('');
    }

    const architectureContainer = document.getElementById('modal-architecture-flow');
    if (architectureContainer) {
        architectureContainer.innerHTML = (project.architecture || [])
            .map(step => `<span class="architecture-node">${step}</span>`)
            .join('');
    }
    
    // Set highlights
    const highlightsContainer = document.getElementById('modal-highlights');
    highlightsContainer.innerHTML = project.highlights
        .map(highlight => `<div class="modal-highlight-item">${highlight}</div>`)
        .join('');
    
    // Set tech tags
    const techContainer = document.getElementById('modal-tech-tags');
    if (project.techGroups) {
        techContainer.innerHTML = Object.entries(project.techGroups)
            .map(([group, techs]) => `
                <div class="modal-tech-lane">
                    <span>${group}</span>
                    <div>${techs.map(tech => `<code>${tech}</code>`).join('')}</div>
                </div>
            `)
            .join('');
    } else {
        techContainer.innerHTML = project.tech
            .map(tech => `<span class="modal-tech-tag">${tech}</span>`)
            .join('');
    }
    
    // Show modal
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('Modal opened successfully');
}

function closeModal() {
    console.log('Closing modal');
    
    const modal = document.getElementById('project-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (modal && overlay) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Modal closed successfully');
    }
}

function initProjectMoreButtons() {
    document.querySelectorAll('.project-card').forEach(card => {
        const projectId = card.getAttribute('data-project-id');
        const content = card.querySelector('.project-content');

        if (!projectId || !content || content.querySelector('.project-more')) {
            return;
        }

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'project-more';
        button.textContent = 'More';
        button.setAttribute('aria-label', `Read more about ${projectData[projectId]?.title || 'this project'}`);
        button.addEventListener('click', event => {
            event.stopPropagation();
            openProjectModal(projectId);
        });

        content.appendChild(button);
    });
}

function openExperienceModal(experienceId) {
    const experience = experienceData[experienceId];
    if (!experience) {
        console.error('Experience not found:', experienceId);
        return;
    }

    const modal = document.getElementById('experience-modal');
    const overlay = document.getElementById('experience-modal-overlay');

    if (!modal || !overlay) {
        console.error('Experience modal elements not found');
        return;
    }

    document.getElementById('experience-modal-logo').src = experience.logo;
    document.getElementById('experience-modal-logo').alt = `${experience.company} logo`;
    document.getElementById('experience-modal-title').textContent = experience.company;
    document.getElementById('experience-modal-role').textContent = experience.role;
    document.getElementById('experience-modal-project').textContent = experience.project;

    const companyLink = document.getElementById('experience-modal-url');
    companyLink.href = experience.url;
    companyLink.textContent = experience.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    document.getElementById('experience-modal-products').innerHTML = experience.products
        .map(product => `<li><a href="${product.url}" target="_blank" rel="noopener">${product.name}</a></li>`)
        .join('');

    document.getElementById('experience-modal-summary').innerHTML = experience.summary
        .map(item => `<li>${item}</li>`)
        .join('');

    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeExperienceModal() {
    const modal = document.getElementById('experience-modal');
    const overlay = document.getElementById('experience-modal-overlay');

    if (modal && overlay) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function initExperienceModals() {
    const overlay = document.getElementById('experience-modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeExperienceModal);
    }

    document.querySelectorAll('.timeline-item[data-experience-id]').forEach(item => {
        item.addEventListener('click', () => {
            openExperienceModal(item.getAttribute('data-experience-id'));
        });

        item.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openExperienceModal(item.getAttribute('data-experience-id'));
            }
        });
    });
}

function openBlogModal(blogId) {
    const blog = blogData[blogId];
    if (!blog) {
        console.error('Blog not found:', blogId);
        return;
    }

    const modal = document.getElementById('blog-modal');
    const overlay = document.getElementById('blog-modal-overlay');

    if (!modal || !overlay) {
        console.error('Blog modal elements not found');
        return;
    }

    document.getElementById('blog-modal-title').textContent = blog.title;
    document.getElementById('blog-modal-meta').textContent = blog.meta;
    document.getElementById('blog-modal-diagram').innerHTML = blog.diagram
        .map(step => `<span>${step}</span>`)
        .join('');
    document.getElementById('blog-modal-checklist').innerHTML = blog.checklist
        .map(item => `<li>${item}</li>`)
        .join('');
    document.getElementById('blog-modal-tradeoffs').innerHTML = blog.tradeoffs
        .map(([label, body]) => `<div><strong>${label}</strong><span>${body}</span></div>`)
        .join('');
    document.getElementById('blog-modal-content').innerHTML = blog.sections
        .map(section => `<h3>${section.heading}</h3><p>${section.body}</p>`)
        .join('');

    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
    const modal = document.getElementById('blog-modal');
    const overlay = document.getElementById('blog-modal-overlay');

    if (modal && overlay) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function initBlogCards() {
    const overlay = document.getElementById('blog-modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeBlogModal);
    }

    document.querySelectorAll('.writing-card[data-blog-id]').forEach(card => {
        card.addEventListener('click', () => {
            openBlogModal(card.getAttribute('data-blog-id'));
        });
    });
}

// ============================================
// INITIALIZE EVERYTHING ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing portfolio...');
    
    // Initialize portfolio filters
    initPortfolioFilters();
    
    // Initialize modal close handlers
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
        console.log('Overlay click handler attached');
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeExperienceModal();
            closeBlogModal();
        }
    });
    console.log('Escape key handler attached');
    
    // Add click handlers to project cards
    const projectCards = document.querySelectorAll('.project-card');
    console.log(`Found ${projectCards.length} project cards`);
    
    projectCards.forEach((card, index) => {
        const projectId = card.getAttribute('data-project-id');
        console.log(`Card ${index + 1}: ${projectId}`);
        
        card.addEventListener('click', function() {
            console.log('Card clicked:', projectId);
            if (projectId) {
                openProjectModal(projectId);
            } else {
                console.error('No project ID on card');
            }
        });
    });

    initProjectMoreButtons();
    initExperienceModals();
    initBlogCards();
    
    console.log('All event listeners attached');
    console.log('Portfolio fully initialized and ready');
});

console.log('JavaScript file loaded successfully');
