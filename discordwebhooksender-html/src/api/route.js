async function handler() {
  try {
    const templates = await sql`
      SELECT * FROM webhook_templates 
      ORDER BY created_at DESC
    `;

    return { templates };
  } catch (error) {
    return { error: "Failed to fetch templates" };
  }
}