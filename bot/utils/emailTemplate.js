const EmailTemplate = (
  name,
  link,
  currentPrice,
  demandPrice,
  image,
  type,
  currency
) => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New email template 2022-12-06</title><!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Oswald:300,700&display=swap" rel="stylesheet"><!--<![endif]--><!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]--><!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
    <style type="text/css">
    #outlook a {
        padding:0;
    }
    .ExternalClass {
        width:100%;
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height:100%;
    }
    .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
        line-height:inherit!important;
    }
    .es-desk-hidden {
        display:none;
        float:left;
        overflow:hidden;
        width:0;
        max-height:0;
        line-height:0;
        mso-hide:all;
    }
    [data-ogsb] .es-button {
        border-width:0!important;
        padding:25px 40px 25px 40px!important;
    }
    [data-ogsb] .es-button.es-button-1 {
        padding:15px 35px!important;
    }
    [data-ogsb] .es-button.es-button-2 {
        padding:25px 45px!important;
    }
    @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:28px!important; text-align:left } h2 { font-size:20px!important; text-align:left } h3 { font-size:14px!important; text-align:left } h1 a { text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:28px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:14px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:14px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:14px!important; display:block!important; border-bottom-width:20px!important; border-right-width:0px!important; border-left-width:0px!important; border-top-width:20px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
    </style>
    </head>
    <body data-new-gr-c-s-loaded="14.1088.0" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'Open Sans', sans-serif;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#F5F5F5"><!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#f5f5f5"></v:fill>
                </v:background>
            <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F5F5F5">
        <tr style="border-collapse:collapse">
        <td valign="top" style="padding:0;Margin:0">
        <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#1B2A2F;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
            <td align="center" bgcolor="#111517" style="padding:0;Margin:0;background-color:#111517">
            <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#111517" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#111517;width:600px">
                <tr style="border-collapse:collapse">
                <td align="left" style="padding:0;Margin:0;padding-top:25px;padding-bottom:40px">
                <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr style="border-collapse:collapse">
                    <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:600px">
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Open Sans', sans-serif;line-height:21px;color:#BCBDBD;font-size:14px">Your can buy the ${type} now</p></td>
                        </tr>
                    </table></td>
                    </tr>
                </table></td>
                </tr>
                <tr style="border-collapse:collapse">
                <td align="left" bgcolor="transparent" style="padding:0;Margin:0;background-color:transparent"><!--[if mso]><table style="width:600px" cellpadding="0"
                                cellspacing="0"><tr><td style="width:380px" valign="top"><![endif]-->
                <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                    <tr style="border-collapse:collapse">
                    <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:380px">
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;font-size:0"><a target="_blank" href="${link}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#EF0D33;font-size:14px"><img class="adapt-img" src="${
    image
      ? image
      : `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80`
  }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="380" height="253"></a></td>
                        </tr>
                    </table></td>
                    </tr>
                </table><!--[if mso]></td><td style="width:5px"></td><td style="width:215px" valign="top"><![endif]-->
                <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr style="border-collapse:collapse">
                    <td align="left" style="padding:0;Margin:0;width:215px">
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:15px;padding-right:15px"><h3 style="Margin:0;line-height:17px;mso-line-height-rule:exactly;font-family:Oswald, sans-serif;font-size:14px;font-style:normal;font-weight:bold;color:#ef0d33;letter-spacing:0px">Hurry Up</h3></td>
                        </tr>
                        <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0;padding-left:15px;padding-right:15px"><h1 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Oswald, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#ffffff;text-transform: capitalize">${type} in price range</h1></td>
                        </tr>
                        <tr style="border-collapse:collapse">
                        <td align="left" class="es-m-txt-l" style="Margin:0;padding-top:15px;padding-left:15px;padding-right:15px;padding-bottom:20px"><!--[if mso]><a href="https://lootle.live" target="_blank" hidden>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://lootle.live" 
                    style="height:44px; v-text-anchor:middle; width:118px" arcsize="0%" stroke="f"  fillcolor="#ef0d33">
            <w:anchorlock></w:anchorlock>
            <center style='color:#ffffff; font-family:Oswald, sans-serif; font-size:12px; font-weight:700; line-height:12px;  mso-text-raise:1px'>View now!</center>
        </v:roundrect></a>
    <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#1B2A2F;background:#ef0d33;border-width:0px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://lootle.live" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:12px;border-style:solid;border-color:#ef0d33;border-width:15px 35px;display:inline-block;background:#ef0d33;border-radius:0px;font-family:Oswald, sans-serif;font-weight:bold;font-style:normal;line-height:14px;width:auto;text-align:center">View now!</a></span><!--<![endif]--></td>
                        </tr>
                    </table></td>
                    </tr>
                </table><!--[if mso]></td></tr></table><![endif]--></td>
                </tr>
            </table></td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse">
            <td class="es-info-area" align="center" bgcolor="#111517" style="padding:0;Margin:0;background-color:#111517">
            <table bgcolor="#111517" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#111517;width:600px">
                <tr style="border-collapse:collapse">
                <td align="left" style="Margin:0;padding-left:10px;padding-right:10px;padding-bottom:20px;padding-top:35px">
                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr style="border-collapse:collapse">
                    <td align="center" valign="top" style="padding:0;Margin:0;width:580px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                        <td align="center" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;line-height:19px;font-size:16px;color:#FFFFFF"><h1 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Oswald, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#ffffff">${name}</h1></td>
                        </tr>
                        <tr style="border-collapse:collapse">
                        <td align="center" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;line-height:19px;font-size:16px;color:#FFFFFF"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Open Sans', sans-serif;line-height:19px;color:#FFFFFF;font-size:16px"><strong>Current price:</strong>&nbsp;${currency}${currentPrice}<br><strong>Your entered price:</strong>&nbsp;${currency}${demandPrice}</p></td>
                        </tr>
                        <tr style="border-collapse:collapse">
                        <td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:19px;font-size:16px;color:#FFFFFF"><!--[if mso]><a href="https://lootle.live" target="_blank" hidden>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://lootle.live" 
                    style="height:64px; v-text-anchor:middle; width:134px" arcsize="0%" stroke="f"  fillcolor="#ffffff">
            <w:anchorlock></w:anchorlock>
            <center style='color:#ef0d33; font-family:Oswald, sans-serif; font-size:12px; font-weight:700; line-height:12px;  mso-text-raise:1px'>Buy now!</center>
        </v:roundrect></a>
    <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#1B2A2F;background:#ffffff;border-width:0px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="${link}" class="es-button es-button-2" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#ef0d33;font-size:12px;border-style:solid;border-color:#ffffff;border-width:25px 45px;display:inline-block;background:#ffffff;border-radius:0px;font-family:Oswald, sans-serif;font-weight:bold;font-style:normal;line-height:14px;width:auto;text-align:center">Buy now!</a></span><!--<![endif]--></td>
                        </tr>
                    </table></td>
                    </tr>
                </table></td>
                </tr>
            </table></td>
            </tr>
        </table>
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#f5f5f5" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F5F5F5;width:600px">
                <tr style="border-collapse:collapse">
                <td align="left" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:40px">
                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr style="border-collapse:collapse">
                    <td align="center" valign="top" style="padding:0;Margin:0;width:580px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:17px;mso-line-height-rule:exactly;font-family:Oswald, sans-serif;font-size:14px;font-style:normal;font-weight:bold;color:#888888;letter-spacing:0px">WE HELP YOU TO GET THE BEST DEALS</h3></td>
                        </tr>
                    </table></td>
                    </tr>
                </table></td>
                </tr>
            </table></td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
            <tr style="border-collapse:collapse">
            <td class="es-info-area" align="center" bgcolor="#333333" style="padding:0;Margin:0;background-color:#333333">
            <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                <tr style="border-collapse:collapse">
                <td align="left" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:40px">
                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tr style="border-collapse:collapse">
                    <td align="center" valign="top" style="padding:0;Margin:0;width:580px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                        <td align="center" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;line-height:19px;font-size:16px;color:#FFFFFF"><h1 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Oswald, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#ffffff">WHERE DOES IT COME FROM?</h1></td>
                        </tr>
                        <tr style="border-collapse:collapse">
                        <td align="center" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;line-height:19px;font-size:16px;color:#FFFFFF"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Open Sans', sans-serif;line-height:19px;color:#FFFFFF;font-size:16px">You have used loote.live to track the price of above item. Now the ${type} is in the range you defined. So you are receiving this email.</p></td>
                        </tr>
                        <tr style="border-collapse:collapse">
                        <td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:19px;font-size:16px;color:#FFFFFF"><!--[if mso]><a href="https://lootle.live" target="_blank" hidden>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://lootle.live" 
                    style="height:64px; v-text-anchor:middle; width:154px" arcsize="0%" stroke="f"  fillcolor="#0a3c49">
            <w:anchorlock></w:anchorlock>
            <center style='color:#ffffff; font-family:Oswald, sans-serif; font-size:12px; font-weight:700; line-height:12px;  mso-text-raise:1px'>Visit lootle.live</center>
        </v:roundrect></a>
    <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#1B2A2F;background:#0a3c49;border-width:0px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://lootle.live" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#ffffff;font-size:12px;border-style:solid;border-color:#0a3c49;border-width:25px 40px 25px 40px;display:inline-block;background:#0a3c49;border-radius:0px;font-family:Oswald, sans-serif;font-weight:bold;font-style:normal;line-height:14px;width:auto;text-align:center">Visit lootle.live</a></span><!--<![endif]--></td>
                        </tr>
                    </table></td>
                    </tr>
                </table></td>
                </tr>
            </table></td>
            </tr>
        </table>
        <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#111517;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
            <td align="center" style="padding:0;Margin:0">
            <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#111517;width:600px">
                <tr style="border-collapse:collapse">
                <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                            cellspacing="0"><tr><td style="width:175px" valign="top"><![endif]-->
                <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                    <tr style="border-collapse:collapse">
                    <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:175px">
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://lootle.live" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#EF0D33;font-size:12px"><img src="https://ardpkh.stripocdn.email/content/guids/b78b3f96-ffdb-4a95-a202-566c46a6f165/images/appletouchicon.png" alt="Lootle.live" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="95" title="Lootle.live" class="adapt-img" height="95"></a></td>
                        </tr>
                        <tr style="border-collapse:collapse">
                        <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;font-size:0">
                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                            <tr style="border-collapse:collapse">
                            <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://twitter.com/@aashishpanthi11" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#EF0D33;font-size:12px"><img src="https://ardpkh.stripocdn.email/content/assets/img/social-icons/logo-white/twitter-logo-white.png" alt="Tw" title="Twitter" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                            <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://youtube.com/@aashishpanthi" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#EF0D33;font-size:12px"><img src="https://ardpkh.stripocdn.email/content/assets/img/social-icons/logo-white/youtube-logo-white.png" alt="Yt" title="Youtube" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                            <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://instagram.com/aashishpanthi11" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#EF0D33;font-size:12px"><img src="https://ardpkh.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Ig" title="Instagram" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table></td>
                    </tr>
                </table><!--[if mso]></td><td style="width:20px"></td><td style="width:365px" valign="top"><![endif]-->
                <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                    <tr style="border-collapse:collapse">
                    <td align="left" style="padding:0;Margin:0;width:365px">
                    <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                        <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Open Sans', sans-serif;line-height:18px;color:#BCBDBD;font-size:12px">We are an open source project. You can help us by contibuting by code or without code. Also, if you like the work you can spread words around the internet. Don't forget to mention us.</p></td>
                        </tr>
                    </table></td>
                    </tr>
                </table><!--[if mso]></td></tr></table><![endif]--></td>
                </tr>
            </table></td>
            </tr>
        </table></td>
        </tr>
    </table>
    </div>
    </body>
    </html>
`;
};

export default EmailTemplate;
