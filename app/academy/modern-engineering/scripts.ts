// The page's original inline scripts from the Stitch export, unchanged.
// <PageScripts> runs them after the page mounts and cleans up on navigation.

export const scripts: string[] = [
`  function switchSimulatorTab(tabKey) {
    const codeTerraform = document.getElementById('code-content-terraform');
    const codeK8s = document.getElementById('code-content-k8s');
    const fileName = document.getElementById('simulator-file-name');
    const btnTf = document.getElementById('btn-tab-terraform');
    const btnK8s = document.getElementById('btn-tab-k8s');

    if (tabKey === 'terraform') {
      codeTerraform.classList.remove('hidden');
      codeK8s.classList.add('hidden');
      fileName.innerText = 'cluster-mesh-sovereign.tf';

      btnTf.className = 'px-space-md py-1.5 rounded font-label-md text-label-md font-semibold bg-secondary-container text-on-secondary-container transition-all';
      btnK8s.className = 'px-space-md py-1.5 rounded font-label-md text-label-md font-semibold text-surface-bright hover:text-secondary-fixed transition-all';
    } else {
      codeTerraform.classList.add('hidden');
      codeK8s.classList.remove('hidden');
      fileName.innerText = 'telecom-ingress-mtls.yaml';

      btnK8s.className = 'px-space-md py-1.5 rounded font-label-md text-label-md font-semibold bg-secondary-container text-on-secondary-container transition-all';
      btnTf.className = 'px-space-md py-1.5 rounded font-label-md text-label-md font-semibold text-surface-bright hover:text-secondary-fixed transition-all';
    }
  }

  function runManifestValidation() {
    const btn = document.getElementById('validate-btn');
    const output = document.getElementById('validation-output');

    btn.innerHTML = '<span class="material-symbols-outlined text-[16px] animate-spin">refresh</span><span>Checking...</span>';

    setTimeout(() => {
      btn.innerHTML = '<span class="material-symbols-outlined text-[16px]">check_circle</span><span>Passed (0.12s)</span>';
      output.innerHTML = \`
        <div class="p-2.5 rounded bg-primary-container/80 flex items-center justify-between text-surface-bright animate-fade-in">
          <span>Static Syntax (OPA / Rego)</span>
          <span class="text-secondary-fixed font-bold">100% VALID</span>
        </div>
        <div class="p-2.5 rounded bg-primary-container/80 flex items-center justify-between text-surface-bright">
          <span>CAK Sovereign Cloud Clause 4</span>
          <span class="text-secondary-fixed font-bold">COMPLIANT</span>
        </div>
        <div class="p-2.5 rounded bg-primary-container/80 flex items-center justify-between text-surface-bright">
          <span>Zero Root Execution</span>
          <span class="text-secondary-fixed font-bold">VERIFIED</span>
        </div>
      \`;
    }, 450);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const statusMsg = document.getElementById('form-status-msg');
    statusMsg.classList.remove('hidden');
    event.target.reset();
  }`,
];
