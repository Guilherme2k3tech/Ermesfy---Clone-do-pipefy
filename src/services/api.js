export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: ['#1e6091'],
            user: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          },
          {
            id: 2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: ['#1e6091'],
            user: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          },
          {
            id: 3,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit (Lorem ipsum dolor sit amet, consectetur adipiscing elit)',
            labels: ['#1e6091'],
            user: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          },
          {
            id: 4,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit"',
            labels: ['#1e6091'],
            user: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          },
          {
            id: 5,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: ['#1e6091'],
            user: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: [],
            user: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: ['#1e6091'],
            user: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          },
          {
            id: 8,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: ['#1e6091'],
            user: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          },
          {
            id: 9,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: [],
          },
          {
            id: 12,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            labels: ['#1e6091'],
          },
          {
            id: 13,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit"',
            labels: ['#1e6091'],
          }
        ]
      },
    ];
  }