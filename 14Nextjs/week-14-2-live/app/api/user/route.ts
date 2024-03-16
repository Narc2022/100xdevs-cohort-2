export function GET() {
  // database logics
  return Response.json({
    email: "sachin@gmail.com",
    name: "sachin singh",
  });
}

// express example same for above
/*
app.get("/api/user", () => {
  res.json({
    email: "sachin@gmail.com",
    name: "sachin243",
  });
});
*/

export function POST() {
  // database logics
  return Response.json({
    email: "sachin@gmail.com",
    name: "sachin singh",
  });
}
