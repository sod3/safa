# Source audit — 4 October 2026

The complete existing information architecture was inspected before frontend authoring: homepage sections (about, products, services, careers, contact), order form, coupons, referrals, recognition, app, privacy and terms. Raw HTML captures and the asset provenance manifest are retained in the parent `research/` folder.

## Verified company information

| Fact | Official source | Treatment in the redesign |
| --- | --- | --- |
| Safa International Co. W.L.L.; Qatar operations began in 2004 | [Safa homepage](https://safawaterqa.com/) | Company story, founding statistic and schema |
| Ten years of prior experience in Dubai | [Safa homepage](https://safawaterqa.com/) | About page only |
| 220+ covered delivery vehicles | [Safa homepage](https://safawaterqa.com/) | Fleet sections and verified statistics; no live tracking |
| 500+ employees | [Safa homepage](https://safawaterqa.com/) | Company figures and careers |
| 6,000 m² facility in the New Industrial Area | [Safa homepage](https://safawaterqa.com/) | Facility, map, contact and schema |
| More than a dozen treatment processes | [Safa homepage](https://safawaterqa.com/) | Purification information; no invented detailed process order |
| Bottle sterilisation at every refill | [Safa homepage](https://safawaterqa.com/) | Quality process |
| Qualified chemists/microbiologists test finished water after each batch | [Safa homepage](https://safawaterqa.com/) | Quality and facility |
| Homes, retail stores and corporate organisations | [Safa homepage](https://safawaterqa.com/) | Verified customer categories; no fabricated logos/reviews |
| FSSC 22000; ISO 22000 awarded in 2012 | [Published recognition](https://safawaterqa.com/our-recognition/) | Reported certifications; validity confirmation explicitly available from Safa |
| ABWA and WQA memberships | [Published recognition](https://safawaterqa.com/our-recognition/) | Association memberships, distinct from certifications |
| +974 44606699; sales@safawaterqa.com | [Contact section](https://safawaterqa.com/#reach-us) | Phone and email links throughout |
| hr@safawaterqa.com | [Careers section](https://safawaterqa.com/#career) | Careers email route |
| Facility marker: 25.165416, 51.397702 | Safa homepage Google Maps embed | Real facility marker; no invented delivery-area markers |

## Products and ordering

The [official catalogue](https://safawaterqa.com/#products) lists 5-gallon drinking water, pot dispensers, manual hand pumps, cradles with taps, hot/cold tabletop and standing dispensers, and cup holders. Tabletop model ZWD-5X29T: 365×370×570 mm, 12 kg. Standing model SWD5X30C: 360×370×970 mm, 14.1 kg. Both published specifications: 220–240 V, hot water 5 L/h at ≥90°C, cold water 2 L/h at ≤10°C. No product prices are published in the redesign.

The [official order page](https://safawaterqa.com/order-online/) uses separate new/existing customer forms. Fields include name, contact, customer type/enquiry type, location, email and customer code for existing customers. Raw HTML also identifies Contact Form 7 and an OTP plugin. Endpoint wiring and the OTP contract need authorised access; the new planner does not bypass that workflow.

[Coupons](https://safawaterqa.com/buy-coupons/) lists 25, 50 and 100 coupon options. Current prices and redemption rules remain subject to confirmation. [Referral requests](https://safawaterqa.com/refer-friends/) collect a customer code, phone and friend contacts; the redesign retains a link to that actual programme without inventing rewards.

## Apps and other existing information

Both store links are published on [Safa’s app page](https://safawaterqa.com/download-app/): [Google Play](https://play.google.com/store/apps/details?id=com.mobiz.safaCustomer) and [App Store](https://apps.apple.com/in/app/safa-water/id1540562156). Store pages were checked and identify Safa. The redesign does not invent account/address/recurring-order features from a phone mockup.

The existing [privacy policy](https://safawaterqa.com/privacy-policy/) and [terms](https://safawaterqa.com/terms-conditions/) were inspected and remain linked in full. A complete re-publication or translation of those documents is not substituted for the original policies. Outdated COVID messaging was omitted as requested.

Qatar boundary geometry is sourced from the [world.geo.json Qatar dataset](https://github.com/johan/world.geo.json/blob/master/countries/QAT.geo.json). Only the verified Safa facility is marked.

## Requires Safa confirmation before public launch

- Current certification certificates, expiry dates and continued association membership status.
- Current product prices, stock, coupon redemption conditions and referral programme conditions.
- Address-level delivery coverage, schedules and any guaranteed turnaround or recurring-delivery service.
- Current opening hours and a verified WhatsApp number; neither is invented.
- Direct ordering/OTP API, payment provider, business inbox adapter and account integration.
- Approved studio product images replacing or approving AI-enhanced cutouts; native Arabic review and operator-approved legal wording.

No customer reviews, awards, client identities, live-tracking data, delivery dates or prices were fabricated.
