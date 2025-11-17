const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Prepare sales report",
        "description": "Compile the Q4 sales data and generate insights.",
        "date": "2025-11-05",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client meeting",
        "description": "Discuss project updates with the marketing client.",
        "date": "2025-11-08",
        "category": "Meeting",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team feedback session",
        "description": "Collect feedback from team members on workflow.",
        "date": "2025-11-03",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },

  {
    "id": 2,
    "firstname": "Rohit",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Website redesign",
        "description": "Revamp the homepage UI for better user engagement.",
        "date": "2025-11-01",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix login bug",
        "description": "Resolve authentication issue for mobile users.",
        "date": "2025-11-10",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database optimization",
        "description": "Improve query performance for analytics dashboard.",
        "date": "2025-11-06",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Add new feature",
        "description": "Implement dark mode option on user dashboard.",
        "date": "2025-11-12",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },

  {
    "id": 3,
    "firstname": "Sanjay",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Conduct training session",
        "description": "Organize a workshop on cybersecurity awareness.",
        "date": "2025-11-04",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Document API endpoints",
        "description": "Update API documentation for the developer portal.",
        "date": "2025-11-07",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix typo errors",
        "description": "Proofread and correct spelling mistakes in landing page.",
        "date": "2025-11-03",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },

  {
    "id": 4,
    "firstname": "Vikram",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Test new payment gateway",
        "description": "Run functional tests on the new Razorpay integration.",
        "date": "2025-11-02",
        "category": "QA",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Deploy latest version",
        "description": "Push new build to production after QA approval.",
        "date": "2025-11-09",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Monitor server logs",
        "description": "Check logs for errors after production release.",
        "date": "2025-11-10",
        "category": "Maintenance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare release notes",
        "description": "Document the new features for version 3.1 release.",
        "date": "2025-11-11",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },

  {
    "id": 5,
    "firstname": "Harsh",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Customer feedback analysis",
        "description": "Analyze customer feedback from recent campaign.",
        "date": "2025-11-01",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare monthly report",
        "description": "Summarize KPIs and send report to management.",
        "date": "2025-11-10",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Design infographic",
        "description": "Create a visual infographic for sales performance.",
        "date": "2025-11-07",
        "category": "Design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Email campaign",
        "description": "Launch the November promotional email campaign.",
        "date": "2025-11-05",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug fix - chart rendering",
        "description": "Fix broken chart display in analytics dashboard.",
        "date": "2025-11-09",
        "category": "Frontend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];



const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]
export const setlocalStorage =() => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

}
export const getlocalStorage =() => {
       const employees = JSON.parse(localStorage.getItem('employees'));
       const admin = JSON.parse(localStorage.getItem('admin'));
        //  console.log(employees,admin);
        return{employees,admin};
}