const User = require('./models/User');
const Stand = require('./models/Stand');
const StandUseRequest = require('./models/StandUseRequest');

export async function createMockData() {
  try {
    // Create mock users
    const mockUsers = [
      {
        id: '12345678',
        name: 'John',
        password: 'password123',
        phone: '1234567890',
        unit: 'A101',
      },
      {
        id: '123456789',
        name: 'Johnathan',
        password: 'password456',
        phone: '9876543210',
        unit: 'B202',
      },
      // Add more mock user objects as needed
    ];
    const createdUsers = await User.bulkCreate(mockUsers);
    console.log('Mock users created:', createdUsers.length);

    // Create mock stands
    const mockStands = [
      {
        base: 'Base A',
        building: 'Building X',
        network: 'Network 1',
        office: 'Office 101',
        description: 'Stand A description',
        lat: 37.123456,
        long: -122.987654,
        ownerId: '12345678',
        isPrimary: true,
      },
      {
        base: 'Base B',
        building: 'Building Y',
        network: 'Network 2',
        office: 'Office 202',
        description: 'Stand B description',
        lat: 37.234567,
        long: -122.876543,
        ownerId: '123456789',
        isPrimary: false,
      },
      // Add more mock stand objects as needed
    ];
    const createdStands = await Stand.bulkCreate(mockStands);
    console.log('Mock stands created:', createdStands.length);

    // Create mock stand use requests
    const mockRequests = [
      {
        clientId: '12345678',
        providerId: '123456789',
        date: new Date(),
        requestStatus: true,
      },
      {
        clientId: '123456789',
        providerId: '12345678',
        date: new Date(),
        requestStatus: false,
      },
      // Add more mock request objects as needed
    ];
    const createdRequests = await StandUseRequest.bulkCreate(mockRequests);
    console.log('Mock stand use requests created:', createdRequests.length);
  } catch (error) {
    console.error('Failed to create mock data:', error);
  }
}

// createMockData();
