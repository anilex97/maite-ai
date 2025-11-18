import { NextRequest, NextResponse } from "next/server";

// Типы данных
interface User {
  id: number;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  telegramUsername: string;
  aiAvatar: string;
  createdAt: string;
  updatedAt: string;
}

// Моковые данные (должны быть синхронизированы с основным роутом)
let mockUsers: User[] = [
  {
    id: 1,
    fullName: "John Doe",
    phoneNumber: "+1234567890",
    emailAddress: "john@example.com",
    telegramUsername: "@johndoe",
    aiAvatar: "luna",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    fullName: "Jane Smith",
    phoneNumber: "+1987654321",
    emailAddress: "jane@example.com",
    telegramUsername: "@janesmith",
    aiAvatar: "theo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// GET /api/admin/users/[id] - Получение конкретного пользователя
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);
    const user = mockUsers.find((u) => u.id === userId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/users/[id] - Обновление пользователя
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);
    const body = await request.json();
    const { fullName, phoneNumber, emailAddress, telegramUsername, aiAvatar } =
      body;

    const userIndex = mockUsers.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Обновление пользователя
    mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      fullName: fullName || mockUsers[userIndex].fullName,
      phoneNumber: phoneNumber || mockUsers[userIndex].phoneNumber,
      emailAddress: emailAddress || mockUsers[userIndex].emailAddress,
      telegramUsername:
        telegramUsername || mockUsers[userIndex].telegramUsername,
      aiAvatar: aiAvatar || mockUsers[userIndex].aiAvatar,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({ message: "User updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/users/[id] - Удаление пользователя
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id);
    const userIndex = mockUsers.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    mockUsers.splice(userIndex, 1);

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
