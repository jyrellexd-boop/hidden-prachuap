# Run this from the project folder in PowerShell:
# .\download-images.ps1

$null = New-Item -ItemType Directory -Force -Path "public\images"

$images = @{
  "hero.png"           = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/a2fabd126_generated_3195f9cb.png"
  "about.png"          = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/8dd8a0205_generated_f29b0984.png"
  "scan-panorama.png"  = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/b37e602d2_generated_10a01484.png"
  "scan-qr.png"        = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/399cb3720_generated_4e40a27d.png"
  "place1-1.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/cc42ef71c_generated_3ba10fd2.png"
  "place1-2.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/cdb2f711f_generated_5edd1256.png"
  "place1-3.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/a8ee88d2b_generated_e34336cd.png"
  "place2-1.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/dd2bb4c48_generated_bdbf3c50.png"
  "place2-2.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/cad29ff1b_generated_f45b98b6.png"
  "place2-3.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/311c668b0_generated_dc847341.png"
  "place3-1.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/fa62e4caf_generated_9c48fa13.png"
  "place3-2.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/9d7d5b3c7_generated_6ef2bbc9.png"
  "place4-1.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/fb9035751_generated_49606fc5.png"
  "place4-2.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/66df22927_generated_29278e67.png"
  "place5-1.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/f701e98bb_generated_100686e3.png"
  "place5-2.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/cd74fe9e2_generated_7d4af0e3.png"
  "place5-3.png"       = "https://media.db.com/images/public/6a1c0e997e7a78a51a9fa5d2/582794505_generated_9951a421.png"
}

foreach ($name in $images.Keys) {
  $url = $images[$name]
  $dest = "public\images\$name"
  Write-Host "Downloading $name..."
  Invoke-WebRequest -Uri $url -OutFile $dest
}

Write-Host "Done! All images saved to public\images\"
