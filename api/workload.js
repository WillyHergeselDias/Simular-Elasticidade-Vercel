// api/workload.js
export default async function handler(req, res) {
  const start = Date.now();

  // Duração do trabalho simulado (em milissegundos)
  const workloadTime = parseInt(req.query.time || "3000");

  // Simula carga de CPU (loop bloqueante)
  while (Date.now() - start < workloadTime) {
    // Executa algo custoso (ex: cálculo matemático)
    Math.sqrt(Math.random() * Math.random());
  }

  const duration = Date.now() - start;

  res.status(200).json({
    message: `Carga simulada concluída!`,
    workloadTime: `${duration}ms`,
    instance: process.env.VERCEL_REGION || "local",
    timestamp: new Date().toISOString()
  });
}
