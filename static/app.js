async function run() {
  const res = await fetch("/api/intent", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      domain: domain.value,
      intent: intent.value
    })
  });

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}
