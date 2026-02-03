(function(){
  const zataRadio = document.getElementById('prov_zata');
  const endpoint  = document.getElementById('zata_endpoint');
  const protocol  = document.getElementById('zata_protocol');

  function applyPreset(){
    if (zataRadio && zataRadio.checked){
      if (endpoint && !endpoint.value) endpoint.value = 'idr01.zata.ai';
      if (protocol && !protocol.value) protocol.value = 'https';
    }
  }

  if (zataRadio) zataRadio.addEventListener('change', applyPreset);
  applyPreset();

  // Show/hide backup time based on schedule selection
  const scheduleSelect = document.getElementById('backup_schedule');
  const timeRow = document.getElementById('backup_time_row');

  if (scheduleSelect && timeRow) {
    scheduleSelect.addEventListener('change', function() {
      if (this.value === 'daily') {
        timeRow.style.display = '';
      } else {
        timeRow.style.display = 'none';
      }
    });
  }

  // Show/hide notification settings based on checkbox
  const notifyCheckbox = document.getElementById('notify_enabled');
  const notifySettings = document.getElementById('notification_settings');

  if (notifyCheckbox && notifySettings) {
    notifyCheckbox.addEventListener('change', function() {
      if (this.checked) {
        notifySettings.style.display = '';
      } else {
        notifySettings.style.display = 'none';
      }
    });
  }
})();
