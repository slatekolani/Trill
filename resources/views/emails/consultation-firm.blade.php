<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Consultation Request</title>
<style>
  body { margin:0; padding:0; background:#f4f4f5; font-family: Georgia, serif; }
  .wrap { max-width:620px; margin:32px auto; background:#fff; border-radius:2px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,.08); }
  .header { background:#0f1628; padding:32px 40px; }
  .header-bar { width:48px; height:3px; background:#d9a216; margin-bottom:20px; }
  .header h1 { margin:0; color:#fff; font-size:22px; font-weight:700; }
  .header p { margin:6px 0 0; color:#9ca3af; font-size:13px; font-family:Arial,sans-serif; }
  .body { padding:36px 40px; }
  .section-title { font-family:Arial,sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.15em; color:#d9a216; margin:0 0 16px; padding-bottom:8px; border-bottom:1px solid #f3f4f6; }
  .row { display:table; width:100%; margin-bottom:12px; }
  .label { display:table-cell; font-family:Arial,sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; width:140px; padding-top:2px; }
  .val { display:table-cell; font-family:Arial,sans-serif; font-size:14px; color:#1f2937; line-height:1.5; }
  .badge { display:inline-block; background:#fef9ec; color:#92640a; border:1px solid #fcd34d; font-family:Arial,sans-serif; font-size:12px; font-weight:600; padding:3px 10px; border-radius:50px; }
  .matter-box { background:#f9fafb; border-left:3px solid #d9a216; padding:16px 20px; margin:8px 0 24px; font-family:Arial,sans-serif; font-size:14px; color:#374151; line-height:1.7; white-space:pre-wrap; }
  .footer { background:#f9fafb; border-top:1px solid #e5e7eb; padding:20px 40px; text-align:center; font-family:Arial,sans-serif; font-size:11px; color:#9ca3af; }
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <div class="header-bar"></div>
    <h1>New Consultation Request</h1>
    <p>Received {{ now()->format('d M Y \a\t H:i') }} (EAT)</p>
  </div>
  <div class="body">

    <p class="section-title">Client Details</p>
    <div class="row"><span class="label">Name</span><span class="val"><strong>{{ $formData['name'] }}</strong></span></div>
    <div class="row"><span class="label">Email</span><span class="val"><a href="mailto:{{ $formData['email'] }}" style="color:#d9a216;">{{ $formData['email'] }}</a></span></div>
    <div class="row"><span class="label">Phone</span><span class="val">{{ $formData['phone'] }}</span></div>
    @if(!empty($formData['organisation']))
    <div class="row"><span class="label">Organisation</span><span class="val">{{ $formData['organisation'] }}</span></div>
    @endif

    <p class="section-title" style="margin-top:28px;">Consultation Details</p>
    <div class="row"><span class="label">Practice Area</span><span class="val"><span class="badge">{{ $formData['area'] }}</span></span></div>
    <div class="row"><span class="label">Method</span><span class="val">{{ ucfirst(str_replace('-', ' ', $formData['method'])) }}</span></div>
    @if(!empty($formData['preferred_date']))
    <div class="row"><span class="label">Preferred Date</span><span class="val">{{ \Carbon\Carbon::parse($formData['preferred_date'])->format('d M Y') }}</span></div>
    @endif
    @if(!empty($formData['preferred_time']))
    <div class="row"><span class="label">Preferred Time</span><span class="val">{{ ucfirst($formData['preferred_time']) }}</span></div>
    @endif
    @if(!empty($formData['how_heard']))
    <div class="row"><span class="label">How Heard</span><span class="val">{{ ucfirst(str_replace('-', ' ', $formData['how_heard'])) }}</span></div>
    @endif

    <p class="section-title" style="margin-top:28px;">Matter Description</p>
    <div class="matter-box">{{ $formData['matter'] }}</div>

  </div>
  <div class="footer">
    Reply directly to this email to respond to {{ $formData['name'] }}.<br>
    Trill &amp; Associates Advocates &mdash; Rita Tower, 18th Floor, Dar-es-Salaam
  </div>
</div>
</body>
</html>
