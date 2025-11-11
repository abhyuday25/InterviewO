export default {
  providers: [
    {
      // Update this to your actual Clerk domain from your Clerk dashboard
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN || "https://witty-manatee-44.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};
