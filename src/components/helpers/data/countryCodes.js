const countryCodes = [
    { "name": "Afghanistan", "iso": "AF", "flag": "🇦🇫", "dialCode": "+93" },
    { "name": "Aland Islands", "iso": "AX", "flag": "🇦🇽", "dialCode": "+358-18" },
    { "name": "Albania", "iso": "AL", "flag": "🇦🇱", "dialCode": "+355" },
    { "name": "Algeria", "iso": "DZ", "flag": "🇩🇿", "dialCode": "+213" },
    { "name": "American Samoa", "iso": "AS", "flag": "🇦🇸", "dialCode": "+1-684" },
    { "name": "Andorra", "iso": "AD", "flag": "🇦🇩", "dialCode": "+376" },
    { "name": "Angola", "iso": "AO", "flag": "🇦🇴", "dialCode": "+244" },
    { "name": "Anguilla", "iso": "AI", "flag": "🇦🇮", "dialCode": "+1264" },
    { "name": "Antarctica", "iso": "AQ", "flag": "🇦🇶", "dialCode": "+672" },
    { "name": "Antigua and Barbuda", "iso": "AG", "flag": "🇦🇬", "dialCode": "+1-268" },
    { "name": "Argentina", "iso": "AR", "flag": "🇦🇷", "dialCode": "+54" },
    { "name": "Armenia", "iso": "AM", "flag": "🇦🇲", "dialCode": "+374" },
    { "name": "Aruba", "iso": "AW", "flag": "🇦🇼", "dialCode": "+297" },
    { "name": "Australia", "iso": "AU", "flag": "🇦🇺", "dialCode": "+61" },
    { "name": "Austria", "iso": "AT", "flag": "🇦🇹", "dialCode": "+43" },
    { "name": "Azerbaijan", "iso": "AZ", "flag": "🇦🇿", "dialCode": "+994" },
    { "name": "Bahamas", "iso": "BS", "flag": "🇧🇸", "dialCode": "+1-242" },
    { "name": "Bahrain", "iso": "BH", "flag": "🇧🇭", "dialCode": "+973" },
    { "name": "Bangladesh", "iso": "BD", "flag": "🇧🇩", "dialCode": "+880" },
    { "name": "Barbados", "iso": "BB", "flag": "🇧🇧", "dialCode": "+1-246" },
    { "name": "Belarus", "iso": "BY", "flag": "🇧🇾", "dialCode": "+375" },
    { "name": "Belgium", "iso": "BE", "flag": "🇧🇪", "dialCode": "+32" },
    { "name": "Belize", "iso": "BZ", "flag": "🇧🇿", "dialCode": "+501" },
    { "name": "Benin", "iso": "BJ", "flag": "🇧🇯", "dialCode": "+229" },
    { "name": "Bermuda", "iso": "BM", "flag": "🇧🇲", "dialCode": "+1-441" },
    { "name": "Bhutan", "iso": "BT", "flag": "🇧🇹", "dialCode": "+975" },
    { "name": "Bolivia", "iso": "BO", "flag": "🇧🇴", "dialCode": "+591" },
    { "name": "Bonaire, Saint Eustatius and Saba ", "iso": "BQ", "flag": "🇧🇶", "dialCode": "+599" },
    { "name": "Bosnia and Herzegovina", "iso": "BA", "flag": "🇧🇦", "dialCode": "+387" },
    { "name": "Botswana", "iso": "BW", "flag": "🇧🇼", "dialCode": "+267" },


    { "name": "Bouvet Island", "iso": "BV", "flag": "🇧🇻", "dialCode": "+47" },


    { "name": "Brazil", "iso": "BR", "flag": "🇧🇷", "dialCode": "+55" },


    { "name": "British Indian Ocean Territory", "iso": "IO", "flag": "🇮🇴", "dialCode": "+246" },


    { "name": "British Virgin Islands", "iso": "VG", "flag": "🇻🇬", "dialCode": "+1-284" },


    { "name": "Brunei", "iso": "BN", "flag": "🇧🇳", "dialCode": "+673" },


    { "name": "Bulgaria", "iso": "BG", "flag": "🇧🇬", "dialCode": "+359" },


    { "name": "Burkina Faso", "iso": "BF", "flag": "🇧🇫", "dialCode": "+226" },


    { "name": "Burundi", "iso": "BI", "flag": "🇧🇮", "dialCode": "+257" },


    { "name": "Cambodia", "iso": "KH", "flag": "🇰🇭", "dialCode": "+855" },


    { "name": "Cameroon", "iso": "CM", "flag": "🇨🇲", "dialCode": "+237" },


    { "name": "Canada", "iso": "CA", "flag": "🇨🇦", "dialCode": "+1" },


    { "name": "Cape Verde", "iso": "CV", "flag": "🇨🇻", "dialCode": "+238" },


    { "name": "Cayman Islands", "iso": "KY", "flag": "🇰🇾", "dialCode": "+1-345" },


    { "name": "Central African Republic", "iso": "CF", "flag": "🇨🇫", "dialCode": "+236" },


    { "name": "Chad", "iso": "TD", "flag": "🇹🇩", "dialCode": "+235" },


    { "name": "Chile", "iso": "CL", "flag": "🇨🇱", "dialCode": "+56" },


    { "name": "China", "iso": "CN", "flag": "🇨🇳", "dialCode": "+86" },


    { "name": "Christmas Island", "iso": "CX", "flag": "🇨🇽", "dialCode": "+61" },


    { "name": "Cocos Islands", "iso": "CC", "flag": "🇨🇨", "dialCode": "+61" },


    { "name": "Colombia", "iso": "CO", "flag": "🇨🇴", "dialCode": "+57" },


    { "name": "Comoros", "iso": "KM", "flag": "🇰🇲", "dialCode": "+269" },


    { "name": "Cook Islands", "iso": "CK", "flag": "🇨🇰", "dialCode": "+682" },


    { "name": "Costa Rica", "iso": "CR", "flag": "🇨🇷", "dialCode": "+506" },


    { "name": "Croatia", "iso": "HR", "flag": "🇭🇷", "dialCode": "+385" },


    { "name": "Cuba", "iso": "CU", "flag": "🇨🇺", "dialCode": "+53" },


    { "name": "Curacao", "iso": "CW", "flag": "🇨🇼", "dialCode": "+599" },


    { "name": "Cyprus", "iso": "CY", "flag": "🇨🇾", "dialCode": "+357" },


    { "name": "Czech Republic", "iso": "CZ", "flag": "🇨🇿", "dialCode": "+420" },


    { "name": "Democratic Republic of the Congo", "iso": "CD", "flag": "🇨🇩", "dialCode": "+243" },


    { "name": "Denmark", "iso": "DK", "flag": "🇩🇰", "dialCode": "+45" },


    { "name": "Djibouti", "iso": "DJ", "flag": "🇩🇯", "dialCode": "+253" },


    { "name": "Dominica", "iso": "DM", "flag": "🇩🇲", "dialCode": "+1-767" },


    { "name": "Dominican Republic", "iso": "DO", "flag": "🇩🇴", "dialCode": "+1-809 and 1-829" },


    { "name": "East Timor", "iso": "TL", "flag": "🇹🇱", "dialCode": "+670" },


    { "name": "Ecuador", "iso": "EC", "flag": "🇪🇨", "dialCode": "+593" },


    { "name": "Egypt", "iso": "EG", "flag": "🇪🇬", "dialCode": "+20" },


    { "name": "El Salvador", "iso": "SV", "flag": "🇸🇻", "dialCode": "+503" },


    { "name": "Equatorial Guinea", "iso": "GQ", "flag": "🇬🇶", "dialCode": "+240" },


    { "name": "Eritrea", "iso": "ER", "flag": "🇪🇷", "dialCode": "+291" },


    { "name": "Estonia", "iso": "EE", "flag": "🇪🇪", "dialCode": "+372" },


    { "name": "Ethiopia", "iso": "ET", "flag": "🇪🇹", "dialCode": "+251" },


    { "name": "Falkland Islands", "iso": "FK", "flag": "🇫🇰", "dialCode": "+500" },


    { "name": "Faroe Islands", "iso": "FO", "flag": "🇫🇴", "dialCode": "+298" },


    { "name": "Fiji", "iso": "FJ", "flag": "🇫🇯", "dialCode": "+679" },


    { "name": "Finland", "iso": "FI", "flag": "🇫🇮", "dialCode": "+358" },


    { "name": "France", "iso": "FR", "flag": "🇫🇷", "dialCode": "+33" },


    { "name": "French Guiana", "iso": "GF", "flag": "🇬🇫", "dialCode": "+594" },


    { "name": "French Polynesia", "iso": "PF", "flag": "🇵🇫", "dialCode": "+689" },


    { "name": "French Southern Territories", "iso": "TF", "flag": "🇹🇫", "dialCode": "+262" },


    { "name": "Gabon", "iso": "GA", "flag": "🇬🇦", "dialCode": "+241" },


    { "name": "Gambia", "iso": "GM", "flag": "🇬🇲", "dialCode": "+220" },


    { "name": "Georgia", "iso": "GE", "flag": "🇬🇪", "dialCode": "+995" },


    { "name": "Germany", "iso": "DE", "flag": "🇩🇪", "dialCode": "+49" },


    { "name": "Ghana", "iso": "GH", "flag": "🇬🇭", "dialCode": "+233" },


    { "name": "Gibraltar", "iso": "GI", "flag": "🇬🇮", "dialCode": "+350" },


    { "name": "Greece", "iso": "GR", "flag": "🇬🇷", "dialCode": "+30" },


    { "name": "Greenland", "iso": "GL", "flag": "🇬🇱", "dialCode": "+299" },


    { "name": "Grenada", "iso": "GD", "flag": "🇬🇩", "dialCode": "+1-473" },


    { "name": "Guadeloupe", "iso": "GP", "flag": "🇬🇵", "dialCode": "+590" },


    { "name": "Guam", "iso": "GU", "flag": "🇬🇺", "dialCode": "+1-671" },


    { "name": "Guatemala", "iso": "GT", "flag": "🇬🇹", "dialCode": "+502" },


    { "name": "Guernsey", "iso": "GG", "flag": "🇬🇬", "dialCode": "+44-1481" },


    { "name": "Guinea", "iso": "GN", "flag": "🇬🇳", "dialCode": "+224" },


    { "name": "Guinea-Bissau", "iso": "GW", "flag": "🇬🇼", "dialCode": "+245" },


    { "name": "Guyana", "iso": "GY", "flag": "🇬🇾", "dialCode": "+592" },


    { "name": "Haiti", "iso": "HT", "flag": "🇭🇹", "dialCode": "+509" },


    { "name": "Heard Island and McDonald Islands", "iso": "HM", "flag": "🇭🇲", "dialCode": "+ " },


    { "name": "Honduras", "iso": "HN", "flag": "🇭🇳", "dialCode": "+504" },


    { "name": "Hong Kong", "iso": "HK", "flag": "🇭🇰", "dialCode": "+852" },


    { "name": "Hungary", "iso": "HU", "flag": "🇭🇺", "dialCode": "+36" },


    { "name": "Iceland", "iso": "IS", "flag": "🇮🇸", "dialCode": "+354" },


    { "name": "India", "iso": "IN", "flag": "🇮🇳", "dialCode": "+91" },


    { "name": "Indonesia", "iso": "ID", "flag": "🇮🇩", "dialCode": "+62" },


    { "name": "Iran", "iso": "IR", "flag": "🇮🇷", "dialCode": "+98" },


    { "name": "Iraq", "iso": "IQ", "flag": "🇮🇶", "dialCode": "+964" },


    { "name": "Ireland", "iso": "IE", "flag": "🇮🇪", "dialCode": "+353" },


    { "name": "Isle of Man", "iso": "IM", "flag": "🇮🇲", "dialCode": "+44-1624" },


    { "name": "Israel", "iso": "IL", "flag": "🇮🇱", "dialCode": "+972" },


    { "name": "Italy", "iso": "IT", "flag": "🇮🇹", "dialCode": "+39" },


    { "name": "Ivory Coast", "iso": "CI", "flag": "🇨🇮", "dialCode": "+225" },


    { "name": "Jamaica", "iso": "JM", "flag": "🇯🇲", "dialCode": "+1-876" },


    { "name": "Japan", "iso": "JP", "flag": "🇯🇵", "dialCode": "+81" },


    { "name": "Jersey", "iso": "JE", "flag": "🇯🇪", "dialCode": "+44-1534" },


    { "name": "Jordan", "iso": "JO", "flag": "🇯🇴", "dialCode": "+962" },


    { "name": "Kazakhstan", "iso": "KZ", "flag": "🇰🇿", "dialCode": "+7" },


    { "name": "Kenya", "iso": "KE", "flag": "🇰🇪", "dialCode": "+254" },


    { "name": "Kiribati", "iso": "KI", "flag": "🇰🇮", "dialCode": "+686" },


    { "name": "Kosovo", "iso": "XK", "flag": "🇽🇰", "dialCode": "+383" },


    { "name": "Kuwait", "iso": "KW", "flag": "🇰🇼", "dialCode": "+965" },


    { "name": "Kyrgyzstan", "iso": "KG", "flag": "🇰🇬", "dialCode": "+996" },


    { "name": "Laos", "iso": "LA", "flag": "🇱🇦", "dialCode": "+856" },


    { "name": "Latvia", "iso": "LV", "flag": "🇱🇻", "dialCode": "+371" },


    { "name": "Lebanon", "iso": "LB", "flag": "🇱🇧", "dialCode": "+961" },


    { "name": "Lesotho", "iso": "LS", "flag": "🇱🇸", "dialCode": "+266" },


    { "name": "Liberia", "iso": "LR", "flag": "🇱🇷", "dialCode": "+231" },


    { "name": "Libya", "iso": "LY", "flag": "🇱🇾", "dialCode": "+218" },


    { "name": "Liechtenstein", "iso": "LI", "flag": "🇱🇮", "dialCode": "+423" },


    { "name": "Lithuania", "iso": "LT", "flag": "🇱🇹", "dialCode": "+370" },


    { "name": "Luxembourg", "iso": "LU", "flag": "🇱🇺", "dialCode": "+352" },


    { "name": "Macao", "iso": "MO", "flag": "🇲🇴", "dialCode": "+853" },


    { "name": "Macedonia", "iso": "MK", "flag": "🇲🇰", "dialCode": "+389" },


    { "name": "Madagascar", "iso": "MG", "flag": "🇲🇬", "dialCode": "+261" },


    { "name": "Malawi", "iso": "MW", "flag": "🇲🇼", "dialCode": "+265" },


    { "name": "Malaysia", "iso": "MY", "flag": "🇲🇾", "dialCode": "+60" },


    { "name": "Maldives", "iso": "MV", "flag": "🇲🇻", "dialCode": "+960" },


    { "name": "Mali", "iso": "ML", "flag": "🇲🇱", "dialCode": "+223" },


    { "name": "Malta", "iso": "MT", "flag": "🇲🇹", "dialCode": "+356" },


    { "name": "Marshall Islands", "iso": "MH", "flag": "🇲🇭", "dialCode": "+692" },


    { "name": "Martinique", "iso": "MQ", "flag": "🇲🇶", "dialCode": "+596" },


    { "name": "Mauritania", "iso": "MR", "flag": "🇲🇷", "dialCode": "+222" },


    { "name": "Mauritius", "iso": "MU", "flag": "🇲🇺", "dialCode": "+230" },


    { "name": "Mayotte", "iso": "YT", "flag": "🇾🇹", "dialCode": "+262" },


    { "name": "Mexico", "iso": "MX", "flag": "🇲🇽", "dialCode": "+52" },


    { "name": "Micronesia", "iso": "FM", "flag": "🇫🇲", "dialCode": "+691" },


    { "name": "Moldova", "iso": "MD", "flag": "🇲🇩", "dialCode": "+373" },


    { "name": "Monaco", "iso": "MC", "flag": "🇲🇨", "dialCode": "+377" },


    { "name": "Mongolia", "iso": "MN", "flag": "🇲🇳", "dialCode": "+976" },


    { "name": "Montenegro", "iso": "ME", "flag": "🇲🇪", "dialCode": "+382" },


    { "name": "Montserrat", "iso": "MS", "flag": "🇲🇸", "dialCode": "+1-664" },


    { "name": "Morocco", "iso": "MA", "flag": "🇲🇦", "dialCode": "+212" },


    { "name": "Mozambique", "iso": "MZ", "flag": "🇲🇿", "dialCode": "+258" },


    { "name": "Myanmar", "iso": "MM", "flag": "🇲🇲", "dialCode": "+95" },


    { "name": "Namibia", "iso": "NA", "flag": "🇳🇦", "dialCode": "+264" },


    { "name": "Nauru", "iso": "NR", "flag": "🇳🇷", "dialCode": "+674" },


    { "name": "Nepal", "iso": "NP", "flag": "🇳🇵", "dialCode": "+977" },


    { "name": "Netherlands", "iso": "NL", "flag": "🇳🇱", "dialCode": "+31" },


    { "name": "New Caledonia", "iso": "NC", "flag": "🇳🇨", "dialCode": "+687" },


    { "name": "New Zealand", "iso": "NZ", "flag": "🇳🇿", "dialCode": "+64" },


    { "name": "Nicaragua", "iso": "NI", "flag": "🇳🇮", "dialCode": "+505" },


    { "name": "Niger", "iso": "NE", "flag": "🇳🇪", "dialCode": "+227" },


    { "name": "Nigeria", "iso": "NG", "flag": "🇳🇬", "dialCode": "+234" },


    { "name": "Niue", "iso": "NU", "flag": "🇳🇺", "dialCode": "+683" },


    { "name": "Norfolk Island", "iso": "NF", "flag": "🇳🇫", "dialCode": "+672" },


    { "name": "North Korea", "iso": "KP", "flag": "🇰🇵", "dialCode": "+850" },


    { "name": "Northern Mariana Islands", "iso": "MP", "flag": "🇲🇵", "dialCode": "+1-670" },


    { "name": "Norway", "iso": "NO", "flag": "🇳🇴", "dialCode": "+47" },


    { "name": "Oman", "iso": "OM", "flag": "🇴🇲", "dialCode": "+968" },


    { "name": "Pakistan", "iso": "PK", "flag": "🇵🇰", "dialCode": "+92" },


    { "name": "Palau", "iso": "PW", "flag": "🇵🇼", "dialCode": "+680" },


    { "name": "Palestinian Territory", "iso": "PS", "flag": "🇵🇸", "dialCode": "+970" },


    { "name": "Panama", "iso": "PA", "flag": "🇵🇦", "dialCode": "+507" },


    { "name": "Papua New Guinea", "iso": "PG", "flag": "🇵🇬", "dialCode": "+675" },


    { "name": "Paraguay", "iso": "PY", "flag": "🇵🇾", "dialCode": "+595" },


    { "name": "Peru", "iso": "PE", "flag": "🇵🇪", "dialCode": "+51" },


    { "name": "Philippines", "iso": "PH", "flag": "🇵🇭", "dialCode": "+63" },


    { "name": "Pitcairn", "iso": "PN", "flag": "🇵🇳", "dialCode": "+870" },


    { "name": "Poland", "iso": "PL", "flag": "🇵🇱", "dialCode": "+48" },


    { "name": "Portugal", "iso": "PT", "flag": "🇵🇹", "dialCode": "+351" },


    { "name": "Puerto Rico", "iso": "PR", "flag": "🇵🇷", "dialCode": "+1-787 and 1-939" },


    { "name": "Qatar", "iso": "QA", "flag": "🇶🇦", "dialCode": "+974" },


    { "name": "Republic of the Congo", "iso": "CG", "flag": "🇨🇬", "dialCode": "+242" },


    { "name": "Reunion", "iso": "RE", "flag": "🇷🇪", "dialCode": "+262" },


    { "name": "Romania", "iso": "RO", "flag": "🇷🇴", "dialCode": "+40" },


    { "name": "Russia", "iso": "RU", "flag": "🇷🇺", "dialCode": "+7" },


    { "name": "Rwanda", "iso": "RW", "flag": "🇷🇼", "dialCode": "+250" },


    { "name": "Saint Barthelemy", "iso": "BL", "flag": "🇧🇱", "dialCode": "+590" },


    { "name": "Saint Helena", "iso": "SH", "flag": "🇸🇭", "dialCode": "+290" },


    { "name": "Saint Kitts and Nevis", "iso": "KN", "flag": "🇰🇳", "dialCode": "+1-869" },


    { "name": "Saint Lucia", "iso": "LC", "flag": "🇱🇨", "dialCode": "+1-758" },


    { "name": "Saint Martin", "iso": "MF", "flag": "🇲🇫", "dialCode": "+590" },


    { "name": "Saint Pierre and Miquelon", "iso": "PM", "flag": "🇵🇲", "dialCode": "+508" },


    { "name": "Saint Vincent and the Grenadines", "iso": "VC", "flag": "🇻🇨", "dialCode": "+1-784" },


    { "name": "Samoa", "iso": "WS", "flag": "🇼🇸", "dialCode": "+685" },


    { "name": "San Marino", "iso": "SM", "flag": "🇸🇲", "dialCode": "+378" },


    { "name": "Sao Tome and Principe", "iso": "ST", "flag": "🇸🇹", "dialCode": "+239" },


    { "name": "Saudi Arabia", "iso": "SA", "flag": "🇸🇦", "dialCode": "+966" },


    { "name": "Senegal", "iso": "SN", "flag": "🇸🇳", "dialCode": "+221" },


    { "name": "Serbia", "iso": "RS", "flag": "🇷🇸", "dialCode": "+381" },


    { "name": "Seychelles", "iso": "SC", "flag": "🇸🇨", "dialCode": "+248" },


    { "name": "Sierra Leone", "iso": "SL", "flag": "🇸🇱", "dialCode": "+232" },


    { "name": "Singapore", "iso": "SG", "flag": "🇸🇬", "dialCode": "+65" },


    { "name": "Sint Maarten", "iso": "SX", "flag": "🇸🇽", "dialCode": "+599" },


    { "name": "Slovakia", "iso": "SK", "flag": "🇸🇰", "dialCode": "+421" },


    { "name": "Slovenia", "iso": "SI", "flag": "🇸🇮", "dialCode": "+386" },


    { "name": "Solomon Islands", "iso": "SB", "flag": "🇸🇧", "dialCode": "+677" },


    { "name": "Somalia", "iso": "SO", "flag": "🇸🇴", "dialCode": "+252" },


    { "name": "South Africa", "iso": "ZA", "flag": "🇿🇦", "dialCode": "+27" },


    { "name": "South Georgia and the South Sandwich Islands", "iso": "GS", "flag": "🇬🇸", "dialCode": "+500" },


    { "name": "South Korea", "iso": "KR", "flag": "🇰🇷", "dialCode": "+82" },


    { "name": "South Sudan", "iso": "SS", "flag": "🇸🇸", "dialCode": "+211" },


    { "name": "Spain", "iso": "ES", "flag": "🇪🇸", "dialCode": "+34" },


    { "name": "Sri Lanka", "iso": "LK", "flag": "🇱🇰", "dialCode": "+94" },


    { "name": "Sudan", "iso": "SD", "flag": "🇸🇩", "dialCode": "+249" },


    { "name": "Suriname", "iso": "SR", "flag": "🇸🇷", "dialCode": "+597" },


    { "name": "Svalbard and Jan Mayen", "iso": "SJ", "flag": "🇸🇯", "dialCode": "+47" },


    { "name": "Swaziland", "iso": "SZ", "flag": "🇸🇿", "dialCode": "+268" },


    { "name": "Sweden", "iso": "SE", "flag": "🇸🇪", "dialCode": "+46" },


    { "name": "Switzerland", "iso": "CH", "flag": "🇨🇭", "dialCode": "+41" },


    { "name": "Syria", "iso": "SY", "flag": "🇸🇾", "dialCode": "+963" },


    { "name": "Taiwan", "iso": "TW", "flag": "🇹🇼", "dialCode": "+886" },


    { "name": "Tajikistan", "iso": "TJ", "flag": "🇹🇯", "dialCode": "+992" },


    { "name": "Tanzania", "iso": "TZ", "flag": "🇹🇿", "dialCode": "+255" },


    { "name": "Thailand", "iso": "TH", "flag": "🇹🇭", "dialCode": "+66" },


    { "name": "Togo", "iso": "TG", "flag": "🇹🇬", "dialCode": "+228" },


    { "name": "Tokelau", "iso": "TK", "flag": "🇹🇰", "dialCode": "+690" },


    { "name": "Tonga", "iso": "TO", "flag": "🇹🇴", "dialCode": "+676" },


    { "name": "Trinidad and Tobago", "iso": "TT", "flag": "🇹🇹", "dialCode": "+1-868" },


    { "name": "Tunisia", "iso": "TN", "flag": "🇹🇳", "dialCode": "+216" },


    { "name": "Turkey", "iso": "TR", "flag": "🇹🇷", "dialCode": "+90" },


    { "name": "Turkmenistan", "iso": "TM", "flag": "🇹🇲", "dialCode": "+993" },


    { "name": "Turks and Caicos Islands", "iso": "TC", "flag": "🇹🇨", "dialCode": "+1-649" },


    { "name": "Tuvalu", "iso": "TV", "flag": "🇹🇻", "dialCode": "+688" },


    { "name": "U.S. Virgin Islands", "iso": "VI", "flag": "🇻🇮", "dialCode": "+1-340" },


    { "name": "Uganda", "iso": "UG", "flag": "🇺🇬", "dialCode": "+256" },


    { "name": "Ukraine", "iso": "UA", "flag": "🇺🇦", "dialCode": "+380" },


    { "name": "United Arab Emirates", "iso": "AE", "flag": "🇦🇪", "dialCode": "+971" },


    { "name": "United Kingdom", "iso": "GB", "flag": "🇬🇧", "dialCode": "+44" },


    { "name": "United States Minor Outlying Islands", "iso": "UM", "flag": "🇺🇲", "dialCode": "+1" },


    { "name": "United States", "iso": "US", "flag": "🇺🇸", "dialCode": "+1" },


    { "name": "Uruguay", "iso": "UY", "flag": "🇺🇾", "dialCode": "+598" },


    { "name": "Uzbekistan", "iso": "UZ", "flag": "🇺🇿", "dialCode": "+998" },


    { "name": "Vanuatu", "iso": "VU", "flag": "🇻🇺", "dialCode": "+678" },


    { "name": "Vatican", "iso": "VA", "flag": "🇻🇦", "dialCode": "+379" },


    { "name": "Venezuela", "iso": "VE", "flag": "🇻🇪", "dialCode": "+58" },


    { "name": "Vietnam", "iso": "VN", "flag": "🇻🇳", "dialCode": "+84" },


    { "name": "Wallis and Futuna", "iso": "WF", "flag": "🇼🇫", "dialCode": "+681" },


    { "name": "Western Sahara", "iso": "EH", "flag": "🇪🇭", "dialCode": "+212" },


    { "name": "Yemen", "iso": "YE", "flag": "🇾🇪", "dialCode": "+967" },


    { "name": "Zambia", "iso": "ZM", "flag": "🇿🇲", "dialCode": "+260" },


    { "name": "Zimbabwe", "iso": "ZW", "flag": "🇿🇼", "dialCode": "+263" }


  ]














  
    







  

  
      










