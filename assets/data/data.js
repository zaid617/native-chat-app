// data.js
export const users = [
    {
      id: '1',
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      lastMessage: 'Hey, how are you?',
      timestamp: '10:00 AM',
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/150',
      lastMessage: 'Can we meet tomorrow?',
      timestamp: 'Yesterday',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      avatar: 'https://via.placeholder.com/150',
      lastMessage: 'Sent you the document.',
      timestamp: '2 days ago',
    },
    {
      id: '4',
      name: 'Bob Brown',
      avatar: 'https://via.placeholder.com/150',
      lastMessage: 'Let’s catch up soon!',
      timestamp: '3 days ago',
    },
    {
      id: '5',
      name: 'Charlie Davis',
      avatar: 'https://via.placeholder.com/150',
      lastMessage: 'Thanks for the help!',
      timestamp: '1 week ago',
    },
    {
      id: '6',
      name: 'Diana Evans',
      avatar: 'https://via.placeholder.com/150',
      lastMessage: 'See you at the meeting.',
      timestamp: '2 weeks ago',
    },
  ];
  
  export const chats = [
    {
      id: '1',
      userId: '1',
      messages: [
        {
          id: '1',
          text: 'Hey, how are you?',
          timestamp: '2023-10-01T10:00:00Z',
          sender: '1',
        },
        {
          id: '2',
          text: 'I am good, thanks! How about you?',
          timestamp: '2023-10-01T10:05:00Z',
          sender: '2',
        },
        {
          id: '3',
          text: 'I’m doing great. Just working on a new project.',
          timestamp: '2023-10-01T10:10:00Z',
          sender: '1',
        },
        {
          id: '4',
          text: 'That sounds exciting! Let me know if you need any help.',
          timestamp: '2023-10-01T10:15:00Z',
          sender: '2',
        },
      ],
    },
    {
      id: '2',
      userId: '2',
      messages: [
        {
          id: '1',
          text: 'Can we meet tomorrow?',
          timestamp: '2023-10-02T09:00:00Z',
          sender: '2',
        },
        {
          id: '2',
          text: 'Sure, let’s meet at 10 AM.',
          timestamp: '2023-10-02T09:05:00Z',
          sender: '1',
        },
        {
          id: '3',
          text: 'Perfect! See you then.',
          timestamp: '2023-10-02T09:10:00Z',
          sender: '2',
        },
      ],
    },
    {
      id: '3',
      userId: '3',
      messages: [
        {
          id: '1',
          text: 'Sent you the document.',
          timestamp: '2023-10-03T14:00:00Z',
          sender: '3',
        },
        {
          id: '2',
          text: 'Got it. Thanks!',
          timestamp: '2023-10-03T14:05:00Z',
          sender: '1',
        },
        {
          id: '3',
          text: 'Let me know if you need any changes.',
          timestamp: '2023-10-03T14:10:00Z',
          sender: '3',
        },
      ],
    },
    {
      id: '4',
      userId: '4',
      messages: [
        {
          id: '1',
          text: 'Let’s catch up soon!',
          timestamp: '2023-10-04T16:00:00Z',
          sender: '4',
        },
        {
          id: '2',
          text: 'Definitely! How about this weekend?',
          timestamp: '2023-10-04T16:05:00Z',
          sender: '1',
        },
        {
          id: '3',
          text: 'Sounds good. Let’s plan for Saturday.',
          timestamp: '2023-10-04T16:10:00Z',
          sender: '4',
        },
      ],
    },
    {
      id: '5',
      userId: '5',
      messages: [
        {
          id: '1',
          text: 'Thanks for the help!',
          timestamp: '2023-10-05T11:00:00Z',
          sender: '5',
        },
        {
          id: '2',
          text: 'You’re welcome! Anytime.',
          timestamp: '2023-10-05T11:05:00Z',
          sender: '1',
        },
      ],
    },
    {
      id: '6',
      userId: '6',
      messages: [
        {
          id: '1',
          text: 'See you at the meeting.',
          timestamp: '2023-10-06T13:00:00Z',
          sender: '6',
        },
        {
          id: '2',
          text: 'Yes, I’ll be there.',
          timestamp: '2023-10-06T13:05:00Z',
          sender: '1',
        },
      ],
    },
  ];