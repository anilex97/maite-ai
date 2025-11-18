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

// Моковые данные (замени на реальное подключение к БД)
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

// GET /api/admin/users - Получение списка пользователей
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const limit = parseInt(searchParams.get("limit") || "10");
    const page = parseInt(searchParams.get("page") || "1");

    // Фильтрация по поиску
    let filteredUsers = mockUsers;
    if (search) {
      filteredUsers = mockUsers.filter(
        (user) =>
          user.fullName.toLowerCase().includes(search.toLowerCase()) ||
          user.emailAddress.toLowerCase().includes(search.toLowerCase()) ||
          user.phoneNumber.includes(search)
      );
    }

    // Пагинация
    const total = filteredUsers.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return NextResponse.json({
      data: paginatedUsers,
      total,
      totalPages,
      limit,
      page,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/admin/users - Создание пользователя
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, emailAddress, telegramUsername, aiAvatar } =
      body;

    // Валидация
    if (
      !fullName ||
      !phoneNumber ||
      !emailAddress ||
      !telegramUsername ||
      !aiAvatar
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Создание нового пользователя
    const newUser: User = {
      id: mockUsers.length + 1,
      fullName,
      phoneNumber,
      emailAddress,
      telegramUsername,
      aiAvatar,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockUsers.push(newUser);

    return NextResponse.json(
      {
        id: newUser.id,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
