import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Rao Shahzaib ',
	initials: 'HR',
	location: 'Hyderabad, India',
	locationLink: 'https://www.google.com/maps/place/rahimyarkhan',
	about: 
	    'DevOps & Cloud Engineer passionate about automation, scalability, and building reliable infrastructure that empowers development teams.',
    summary: `I specialize in DevOps, Cloud Computing, and Infrastructure Automation, with hands-on expertise in tools like Kubernetes, Terraform, Docker, Ansible and CI/CD pipelines. I design and implement cloud-native architectures that are scalable, secure, and resilient with a strong focus on efficiency and reliability.
    , I actively collaborate with the global tech community, sharing solutions and tackling real-world infrastructure challenges together.
    I'm driven by a mission to bridge development and operations through automation, helping teams ship faster, safer, and smarter in the cloud.`,
	avatar: '/assets/avatar.jpg',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://raoshahzaib.site'
	},
	contact: {
		link: {
			name: 'Other Links',
			url: 'https://link.raoshahzaib.site'
		},
		email: {
			name: 'Email',
			at: 'raoshahzaibtariq@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+923104010601'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/ShahzaibRao',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/rao-shahzaib/',
				icon: LinkedInIcon
			},
			{
				name: 'Telegram',
				url: 'https://t.me/',
				icon: TelegramIcon
			}
		]
	},
	education: [
		{
		  school: 'National College of Business Administration & Economics (NCBAE)',
		  degree: "Master in Computer Science",
		  start: 'Jul, 2017',
		  end: 'Jun, 2019',
		  description: [
			'Built a strong foundation in core engineering principles.',
			'Explored interdisciplinary interests that led to a growing passion for automation and cloud infrastructure.',
			'Worked on academic and practical projects involving design, analysis, and simulation of mechanical systems.',
			'Participated in workshops and tech fests, developing early skills in problem-solving and teamwork.',
			'This journey eventually sparked a shift toward DevOps, cloud computing, and open-source collaboration.'
		  ]
		}
	],
	work: [
		{
		  company: 'Syantax House',
		  link: 'https://www.syantaxhouse.com',
		  badges: ['Hybrid'],
		  jobs: [
			{
			  title: 'DevOps Engineer',
			  start: 'Mar, 2023',
			  end: 'Present',
			  description: [
				'Implemented CI/CD pipelines using Jenkins, GitHub Actions, and  DevOps to accelerate software delivery.',
				'Managed Kubernetes clusters and containerized applications using Docker and Helm charts.',
				'Automated infrastructure provisioning using Terraform and Ansible across hybrid cloud environments.',
				'Monitored and optimized system performance with Prometheus, Grafana.',
				'Collaborated with cross-functional teams to enhance deployment workflows and incident response.'
			  ]
			}
		  ]
		},
		{
		  company: 'ProLouge',
		  link: 'https://www.prolouge.com',
		  badges: ['Remote'],
		  jobs: [
			{
			  title: 'Cloud DevOps Engineer',
			  start: 'Mar, 2022',
			  end: 'Feb, 2023',
			  description: [
				'Led cloud infrastructure automation initiatives on AWS using Terraform and CloudFormation.',
				'Developed custom monitoring and alerting solutions for mission-critical cloud services.',
				'Worked closely with development teams to improve deployment reliability and rollback mechanisms.',
				'Integrated security best practices and compliance checks into CI/CD workflows.',
				'Contributed to internal knowledge-sharing initiatives and DevOps process standardization.'
			  ]
			}
		  ]
		},
		
	],	  
	skills: [
		'AWS',
		'DevOps',
		'Kubernetes',
		'Docker',
		'Terraform',
		'Ansible',
		'Linux',
		'Ubuntu',
		'CentOS',
		'CI/CD',
		'Jenkins',
		'GitHub Actions',
		'Prometheus',
		'Grafana',
		'Git',
		'GitLab',
		'Monitoring',
		'Helm',
		'NGINX',
		'Networking',
		'GitHub',
		'GitOps',
		'Collaboration',
		'Problem Solving',
		'Communication',
		'Teamwork',
		'Adaptability',
		'Community Engagement',
		'Continuous Learning',
		'Infrastructure as Code',
		'Configuration Management',
		'Load Balancing',
		'High Availability',
		'Performance Tuning',
		'Security Best Practices',
		'HashiCorp Vault',
		'DevOps Practices',
		'VS Code'
	],	  
	projects: [
		{
		  title: 'Kubernetes Workshop',
		  techStack: ['Kubernetes'],
		  description: 'Beginner-friendly guide to setting up Kubernetes.',
		  link: {
			label: 'github.com/NotHarshhaa/AWS-Terraform-Workshop',
			href: 'https://github.com/ShahzaibRao/kubernetes'
		  }
		},
		{
		  title: 'Free file hosting service',
		  techStack: ['Drive', 'cloudflare', 'R2'],
		  description: 'Cloudflare R2 storage manager with Pages and Workers. Free 10 GB storage. Free serverless backend with a limit of 100,000 invocation requests per day.',
		  link: {
			label: 'https://github.com/ShahzaibRao/FlareDrive',
			href: 'https://drive.raoshahzaib.site/'
		  }
		},
		{
		  title: 'CloudFlare free temp domain email',
		  techStack: ['Email', 'Cloudflare'],
		  description: 'Build CloudFlare to send and receive free temporary domain name mailboxes.',
		  link: {
			label: 'webmail.raoshahzaib.site',
			href: 'https://webmail.raoshahzaib.site/en'
		  }
		},
		{
		  title: 'My home lab for testing production tools',
		  techStack: ['Proxmox', 'K3s', 'Ansible', 'Terraform'],
		  description: 'my home lab setup using Proxmox, Terraform, Ansible, and Kubernetes (K3s). The goal is to automate infrastructure deployment and configuration while documenting everything for learning and sharing.',
		  link: {
			label: 'github.com/ShahzaibRao/home-labs',
			href: 'https://github.com/ShahzaibRao/home-labs'
		  }
		},
		
	]			
}
