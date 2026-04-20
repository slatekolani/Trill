<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Consultation Request Received</title>
<style>
  body { margin:0; padding:0; background:#f4f4f5; font-family: Arial, sans-serif; }
  .wrap { max-width:620px; margin:32px auto; background:#fff; border-radius:2px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,.08); }
  .header { background:#0f1628; padding:36px 40px; text-align:center; }
  .header-bar { width:48px; height:3px; background:#d9a216; margin:0 auto 20px; }
  .header h1 { margin:0; color:#fff; font-size:24px; font-weight:700; font-family:Georgia,serif; }
  .header p { margin:8px 0 0; color:#d9a216; font-size:12px; text-transform:uppercase; letter-spacing:.2em; }
  .body { padding:40px; }
  .body p { color:#4b5563; font-size:15px; line-height:1.7; margin:0 0 16px; }
  .steps { margin:28px 0; }
  .step { display:flex; gap:16px; align-items:flex-start; margin-bottom:20px; }
  .step-num { background:#d9a216; color:#fff; font-weight:700; font-size:13px; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-family:Georgia,serif; }
  .step-body h4 { margin:0 0 4px; color:#0f1628; font-size:14px; font-weight:700; font-family:Georgia,serif; }
  .step-body p { margin:0; font-size:13px; color:#6b7280; line-height:1.6; }
  .summary { background:#f9fafb; border-left:3px solid #d9a216; padding:20px 24px; margin:28px 0; border-radius:0 2px 2px 0; }
  .summary p { margin:0 0 6px; font-size:13px; color:#4b5563; }
  .summary p:last-child { margin:0; }
  .summary strong { color:#0f1628; }
  .cta { text-align:center; margin:32px 0; }
  .cta a { background:#d9a216; color:#0f1628; text-decoration:none; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.12em; padding:14px 32px; display:inline-block; border-radius:2px; }
  .divider { border:none; border-top:1px solid #e5e7eb; margin:28px 0; }
  .footer { background:#0f1628; padding:24px 40px; text-align:center; }
  .footer p { margin:0; color:#6b7280; font-size:11px; line-height:1.8; }
  .footer a { color:#d9a216; text-decoration:none; }
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <div class="header-bar"></div>
    <h1>Request Confirmed</h1>
    <p>Trill &amp; Associates Advocates</p>
  </div>
  <div class="body">
    <p>Dear {{ $formData['name'] }},</p>
    <p>Thank you for requesting a consultation with Trill &amp; Associates Advocates. We have received your request and will be in touch within <strong>24 business hours</strong> to confirm your appointment.</p>

    <div class="summary">
      <p><strong>Your request summary:</strong></p>
      <p><strong>Practice Area:</strong> {{ $formData['area'] }}</p>
      <p><strong>Preferred Method:</strong> {{ ucfirst(str_replace('-', ' ', $formData['method'])) }}</p>
      @if(!empty($formData['preferred_date']))<p><strong>Preferred Date:</strong> {{ \Carbon\Carbon::parse($formData['preferred_date'])->format('d M Y') }}</p>@endif
      <p><strong>Submitted:</strong> {{ now()->format('d M Y, H:i') }} (EAT)</p>
    </div>

    <p>Here is what happens next:</p>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-body">
          <h4>Review &amp; Match</h4>
          <p>Our team will review your matter and identify the most suitable advocate within 24 hours.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-body">
          <h4>We'll Contact You</h4>
          <p>An advocate or our client services team will reach out to confirm your appointment details.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-body">
          <h4>Your Consultation</h4>
          <p>Meet with your specialist advocate to discuss your matter and determine the best legal strategy.</p>
        </div>
      </div>
    </div>

    <div class="cta">
      <a href="tel:+255718694863">Need to reach us sooner? Call +255 718 694 863</a>
    </div>

    <hr class="divider" />
    <p style="font-size:13px; color:#9ca3af; margin:0;">
      <strong style="color:#374151;">Office Hours:</strong> Monday – Friday 8:00 AM – 5:00 PM &nbsp;|&nbsp; Saturday 9:00 AM – 1:00 PM<br>
      Rita Tower, 18th Floor &mdash; Makunganya / Simu Street, Dar-es-Salaam, Tanzania
    </p>
  </div>
  <div class="footer">
    <p>
      &copy; {{ date('Y') }} Trill &amp; Associates Advocates. All rights reserved.<br>
      <a href="mailto:info@trill.co.tz">info@trill.co.tz</a> &nbsp;&middot;&nbsp; +255 738 600 670
    </p>
  </div>
</div>
</body>
</html>
