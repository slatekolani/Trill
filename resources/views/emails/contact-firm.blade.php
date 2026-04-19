<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Contact Enquiry</title>
<style>
  body { margin:0; padding:0; background:#f4f4f5; font-family: Georgia, serif; }
  .wrap { max-width:620px; margin:32px auto; background:#fff; border-radius:2px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,.08); }
  .header { background:#0f1628; padding:32px 40px; }
  .header-bar { width:48px; height:3px; background:#d9a216; margin-bottom:20px; }
  .header h1 { margin:0; color:#fff; font-size:22px; font-weight:700; letter-spacing:.5px; }
  .header p { margin:6px 0 0; color:#9ca3af; font-size:13px; font-family: Arial, sans-serif; }
  .body { padding:36px 40px; }
  .label { font-family: Arial, sans-serif; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.15em; color:#6b7280; margin:0 0 4px; }
  .value { font-size:15px; color:#1f2937; margin:0 0 22px; padding-bottom:22px; border-bottom:1px solid #f3f4f6; line-height:1.6; }
  .value:last-of-type { border-bottom:none; margin-bottom:0; padding-bottom:0; }
  .badge { display:inline-block; background:#fef9ec; color:#92640a; border:1px solid #fcd34d; font-family:Arial,sans-serif; font-size:12px; font-weight:600; padding:4px 12px; border-radius:50px; }
  .footer { background:#f9fafb; border-top:1px solid #e5e7eb; padding:20px 40px; text-align:center; font-family:Arial,sans-serif; font-size:11px; color:#9ca3af; }
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <div class="header-bar"></div>
    <h1>New Contact Enquiry</h1>
    <p>Received {{ now()->format('d M Y \a\t H:i') }} (EAT)</p>
  </div>
  <div class="body">
    <p class="label">From</p>
    <p class="value"><strong>{{ $formData['name'] }}</strong><br>
      <a href="mailto:{{ $formData['email'] }}" style="color:#d9a216;">{{ $formData['email'] }}</a>
      @if(!empty($formData['phone']))<br>{{ $formData['phone'] }}@endif
    </p>

    <p class="label">Subject</p>
    <p class="value">{{ $formData['subject'] }}</p>

    @if(!empty($formData['area']))
    <p class="label">Practice Area</p>
    <p class="value"><span class="badge">{{ $formData['area'] }}</span></p>
    @endif

    <p class="label">Message</p>
    <p class="value" style="white-space:pre-wrap;">{{ $formData['message'] }}</p>
  </div>
  <div class="footer">
    Reply directly to this email to respond to {{ $formData['name'] }}.<br>
    Trill &amp; Associates Advocates &mdash; Rita Tower, 18th Floor, Dar-es-Salaam
  </div>
</div>
</body>
</html>
