export interface ClerkUser {
  id: string;
  fullName: string | null;
  imageUrl: string | null;
  username: string | null;
  primaryEmailAddress: string | null;
}

export function UserMapper(userToMap: any) {
  const user = {
    id: userToMap.id,
    fullName: userToMap.fullName,
    imageUrl: userToMap.imageUrl,
    username: userToMap.username,
    primaryEmailAddress: userToMap.primaryEmailAddress,
  };
  return user;
}
