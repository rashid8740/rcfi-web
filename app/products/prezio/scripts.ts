// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`    // 1. Workflow Builder Interactive Simulator State
    let currentTriggerType = 'procurement';
    let currentTriggerDesc = 'Purchase Order KES 3.2M — Initiated by Dept. Lead';
    let currentRoutingRule = 'Assigned to: Finance Auditor (Auto-escalate after 24h)';
    let isSimulating = false;

    function setFlowTrigger(type, desc, btn) {
      if (isSimulating) return;
      currentTriggerType = type;
      currentTriggerDesc = desc;

      document.querySelectorAll('.flow-trigger-btn').forEach(b => {
        b.className = 'flow-trigger-btn p-2.5 rounded-lg border border-outline-variant/60 hover:bg-slate-50 text-slate-700 font-medium text-center transition-all';
      });
      btn.className = 'flow-trigger-btn active p-2.5 rounded-lg border-2 border-secondary bg-emerald-50 text-secondary font-semibold text-center transition-all';

      document.getElementById('sim-node-1-desc').textContent = desc;
    }

    function updateRoutingCondition(val) {
      if (isSimulating) return;
      currentRoutingRule = 'Assigned to: ' + val;
      document.getElementById('sim-node-2-desc').textContent = currentRoutingRule;
    }

    function simulateWorkflowRun() {
      if (isSimulating) return;
      isSimulating = true;

      const btnRun = document.getElementById('btn-simulate-run');
      btnRun.disabled = true;
      btnRun.classList.add('opacity-50', 'cursor-not-allowed');

      const simTimestamp = document.getElementById('sim-timestamp');
      const simTimer = document.getElementById('sim-timer');
      const log = document.getElementById('sim-log');
      const badge = document.getElementById('sim-complete-badge');
      badge.classList.add('hidden');

      // Reset Nodes
      const node1 = document.getElementById('sim-node-1');
      const node1Status = document.getElementById('sim-node-1-status');
      const node2 = document.getElementById('sim-node-2');
      const node2Status = document.getElementById('sim-node-2-status');
      const node3 = document.getElementById('sim-node-3');
      const node3Status = document.getElementById('sim-node-3-status');

      node1.className = "p-4 rounded-xl border border-secondary bg-emerald-50/70 flex items-center justify-between transition-all";
      node1Status.className = "text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-secondary text-white";
      node1Status.textContent = "Processing";

      node2.className = "p-4 rounded-xl border border-slate-200 bg-surface-container-low/60 flex items-center justify-between transition-all";
      node2Status.className = "text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-700";
      node2Status.textContent = "Queued";

      node3.className = "p-4 rounded-xl border border-slate-200 bg-surface-container-low/60 flex items-center justify-between transition-all";
      node3Status.className = "text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-700";
      node3Status.textContent = "Queued";

      const now = new Date();
      simTimestamp.textContent = "Executing at " + now.toLocaleTimeString();
      log.innerHTML = \`<div class="text-secondary-fixed">&gt; [00:01] Request received: "\${currentTriggerDesc}"</div>\`;
      simTimer.textContent = "00:00:01";

      // Phase 1 -> Phase 2 (after 700ms)
      setTimeout(() => {
        node1Status.textContent = "Verified ✓";
        node1Status.className = "text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-emerald-700 text-white";

        node2.className = "p-4 rounded-xl border border-amber-300 bg-amber-50/80 flex items-center justify-between transition-all";
        node2Status.className = "text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-amber-600 text-white animate-pulse";
        node2Status.textContent = "Auditing";

        log.innerHTML += \`
          <div class="text-emerald-300">&gt; [00:04] Smart routing activated. Matrix matches: \${currentRoutingRule}</div>
          <div class="text-white/80">&gt; [00:07] Push notification + WhatsApp webhook dispatched to reviewer.</div>
        \`;
        simTimer.textContent = "00:00:07";
      }, 700);

      // Phase 2 -> Phase 3 (after 1500ms)
      setTimeout(() => {
        node2Status.textContent = "Approved ✓";
        node2Status.className = "text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-emerald-700 text-white";

        node3.className = "p-4 rounded-xl border border-secondary bg-emerald-50 flex items-center justify-between transition-all";
        node3Status.className = "text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-secondary text-white animate-pulse";
        node3Status.textContent = "CertySign Seal";

        log.innerHTML += \`
          <div class="text-secondary-fixed">&gt; [00:11] Reviewer authorized. Handed over to CertySign Sovereign Root CA.</div>
          <div class="text-emerald-400">&gt; [00:13] RFC 3161 Timestamp + SHA-256 Digest calculated on Kenyan HSM.</div>
        \`;
        simTimer.textContent = "00:00:13";
      }, 1500);

      // Complete
      setTimeout(() => {
        node3Status.textContent = "Sealed ✓";
        node3Status.className = "text-[11px] font-mono-code font-bold px-2.5 py-1 rounded bg-emerald-700 text-white";

        log.innerHTML += \`
          <div class="text-secondary-fixed font-bold">&gt; [00:14] Workflow #PR-2026-089 completed in 14 minutes. Tamper-proof certificate generated.</div>
        \`;
        simTimer.textContent = "00:00:14";
        badge.classList.remove('hidden');

        btnRun.disabled = false;
        btnRun.classList.remove('opacity-50', 'cursor-not-allowed');
        isSimulating = false;
      }, 2300);
    }

    // 2. Bottleneck ROI Calculator Logic
    function calculateBottleneckROI() {
      const approvalsPerWeek = parseInt(document.getElementById('range-approvals').value);
      const daysWaiting = parseInt(document.getElementById('range-delay').value);
      const hourlyRate = parseInt(document.getElementById('range-rate').value);

      document.getElementById('val-approvals').textContent = approvalsPerWeek.toLocaleString();
      document.getElementById('val-delay').textContent = daysWaiting + (daysWaiting === 1 ? ' day' : ' days');
      document.getElementById('val-rate').textContent = 'KES ' + hourlyRate.toLocaleString();

      // Calculation:
      // In manual chasing, ~1.0 hours per approval is lost chasing approvers across 52 weeks
      const annualHoursLost = Math.round(approvalsPerWeek * 1.0 * 52);
      // Financial cost = annualHoursLost * hourlyRate
      const annualCostSaved = Math.round(annualHoursLost * hourlyRate);

      document.getElementById('stat-calc-hours').textContent = annualHoursLost.toLocaleString() + ' hrs';
      document.getElementById('stat-calc-speed').textContent = 'From ' + daysWaiting + ' days';
      document.getElementById('stat-calc-kes').textContent = 'KES ' + annualCostSaved.toLocaleString();
    }

    // Initial calculation
    calculateBottleneckROI();
  `,
];
