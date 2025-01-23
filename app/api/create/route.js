import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const apiKey = "dz5f4d5kzrue"; // Use the correct API key
const apiSecret =
  "uusuxgxrpaaa6gsjwbbx8zs893htfz5na7wv9x78uce4q988pps3ggbv3m26nagy"; // Replace with your actual API secret

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const user = await request.json();

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log("A New User Created", token);

  const client = clerkClient();

  // Upsert user in Stream
  await serverClient.upsertUser({ id: user.data.id });

  // Update user metadata in Clerk
  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  // Access all chats and create channels
  const slugs = [
    "Python-chat",
    "js-chat",
    "ml-chat",
    "Web_development-chat",
    "ds-chat",
    "devops-chat",
  ];

  for (const slug of slugs) {
    const channel = serverClient.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: capitalize(slug.replace(/_/g, " ")) + " Discussion",
      created_by_id: user.data.id,
    });

    await channel.create();
    await channel.addMembers([user.data.id]); // Add user as a member
  }

  return new Response(JSON.stringify({ token }), {
    headers: { "Content-Type": "application/json" },
  });
}
