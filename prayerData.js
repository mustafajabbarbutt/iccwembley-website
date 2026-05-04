/**
 * ═══════════════════════════════════════════════════════════════
 * ICC WEMBLEY — UNIFIED PRAYER TIMETABLE DATA
 * Used by: index.html  AND  prayer-times.html
 * ═══════════════════════════════════════════════════════════════
 *
 * HOW TO ADD A NEW MONTH (e.g. August):
 * ─────────────────────────────────────
 * 1. Open THIS file only — never edit index.html or prayer-times.html
 * 2. Scroll to the bottom and add a new month block
 * 3. Upload prayerData.js alongside the two HTML files
 * Both pages update automatically from the 1st of the new month
 *
 * FIELD REFERENCE (one entry per day):
 * ─────────────────────────────────────
 * day           3-letter day abbreviation  e.g. 'TUE'
 * date          Day number as string       e.g. '1'
 * hijri         Islamic date               e.g. '16th Muharram'
 * fajr          Fajr start time
 * fajrJamaat    Fajr jamaat time
 * sunrise       Sunrise time
 * dhuhr         Dhuhr start time
 * dhuhrJamaat   Dhuhr jamaat — on Fridays include both Jumu'ah times
 * e.g. '1:30p / 2:00p'
 * asr           Asr start time (Hanafi)
 * asrJamaat     Asr jamaat time
 * maghrib       Maghrib start time
 * maghribJamaat Maghrib jamaat (usually same as start)
 * isha          Isha start time
 * ishaJamaat    Isha jamaat time
 * isFriday      Add  isFriday: true  on Fridays (omit on other days)
 *
 * TIME FORMAT: lowercase 'a' = AM, 'p' = PM. Always include minutes.
 * MONTHS INCLUDED: April · May · June · July · August
 * ═══════════════════════════════════════════════════════════════
 */

const prayerData = {
  april: {
    displayName: 'April 2026',
    hijriMonth: "Shawwal / Dhul Qa'dah 1447",
    days: [
      { day: 'WED', date: '1',  hijri: '13th Shawwal',     fajr: '5:01a', fajrJamaat: '5:45a', sunrise: '6:37a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '5:31p', asrJamaat: '6:15p', maghrib: '7:37p', maghribJamaat: '7:37p', isha: '8:52p', ishaJamaat: '9:00p' },
      { day: 'THU', date: '2',  hijri: '14th Shawwal',     fajr: '4:59a', fajrJamaat: '5:45a', sunrise: '6:35a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '5:32p', asrJamaat: '6:15p', maghrib: '7:39p', maghribJamaat: '7:39p', isha: '8:54p', ishaJamaat: '9:00p' },
      { day: 'FRI', date: '3',  hijri: '15th Shawwal',     fajr: '4:56a', fajrJamaat: '5:45a', sunrise: '6:33a', dhuhr: '1:10p', dhuhrJamaat: '1:30p / 2:00p', asr: '5:33p', asrJamaat: '6:30p', maghrib: '7:41p', maghribJamaat: '7:41p', isha: '8:55p', ishaJamaat: '9:15p',  isFriday: true },
      { day: 'SAT', date: '4',  hijri: '16th Shawwal',     fajr: '4:53a', fajrJamaat: '5:45a', sunrise: '6:30a', dhuhr: '1:09p', dhuhrJamaat: '1:30p',         asr: '5:34p', asrJamaat: '6:30p', maghrib: '7:42p', maghribJamaat: '7:42p', isha: '8:57p', ishaJamaat: '9:15p' },
      { day: 'SUN', date: '5',  hijri: '17th Shawwal',     fajr: '4:51a', fajrJamaat: '5:45a', sunrise: '6:28a', dhuhr: '1:09p', dhuhrJamaat: '1:30p',         asr: '5:36p', asrJamaat: '6:30p', maghrib: '7:44p', maghribJamaat: '7:44p', isha: '8:58p', ishaJamaat: '9:15p' },
      { day: 'MON', date: '6',  hijri: '18th Shawwal',     fajr: '4:48a', fajrJamaat: '5:45a', sunrise: '6:26a', dhuhr: '1:09p', dhuhrJamaat: '1:30p',         asr: '5:37p', asrJamaat: '6:30p', maghrib: '7:46p', maghribJamaat: '7:46p', isha: '8:59p', ishaJamaat: '9:15p' },
      { day: 'TUE', date: '7',  hijri: '19th Shawwal',     fajr: '4:46a', fajrJamaat: '5:45a', sunrise: '6:24a', dhuhr: '1:09p', dhuhrJamaat: '1:30p',         asr: '5:38p', asrJamaat: '6:30p', maghrib: '7:47p', maghribJamaat: '7:47p', isha: '9:01p', ishaJamaat: '9:15p' },
      { day: 'WED', date: '8',  hijri: '20th Shawwal',     fajr: '4:43a', fajrJamaat: '5:45a', sunrise: '6:21a', dhuhr: '1:08p', dhuhrJamaat: '1:30p',         asr: '5:39p', asrJamaat: '6:30p', maghrib: '7:49p', maghribJamaat: '7:49p', isha: '9:02p', ishaJamaat: '9:15p' },
      { day: 'THU', date: '9',  hijri: '21st Shawwal',     fajr: '4:41a', fajrJamaat: '5:45a', sunrise: '6:19a', dhuhr: '1:08p', dhuhrJamaat: '1:30p',         asr: '5:40p', asrJamaat: '6:30p', maghrib: '7:51p', maghribJamaat: '7:51p', isha: '9:04p', ishaJamaat: '9:15p' },
      { day: 'FRI', date: '10', hijri: '22nd Shawwal',     fajr: '4:38a', fajrJamaat: '5:30a', sunrise: '6:17a', dhuhr: '1:08p', dhuhrJamaat: '1:30p / 2:00p', asr: '5:42p', asrJamaat: '6:45p', maghrib: '7:52p', maghribJamaat: '7:52p', isha: '9:05p', ishaJamaat: '9:30p',  isFriday: true },
      { day: 'SAT', date: '11', hijri: '23rd Shawwal',     fajr: '4:36a', fajrJamaat: '5:30a', sunrise: '6:15a', dhuhr: '1:08p', dhuhrJamaat: '1:30p',         asr: '5:43p', asrJamaat: '6:45p', maghrib: '7:54p', maghribJamaat: '7:54p', isha: '9:07p', ishaJamaat: '9:30p' },
      { day: 'SUN', date: '12', hijri: '24th Shawwal',     fajr: '4:33a', fajrJamaat: '5:30a', sunrise: '6:13a', dhuhr: '1:07p', dhuhrJamaat: '1:30p',         asr: '5:44p', asrJamaat: '6:45p', maghrib: '7:56p', maghribJamaat: '7:56p', isha: '9:08p', ishaJamaat: '9:30p' },
      { day: 'MON', date: '13', hijri: '25th Shawwal',     fajr: '4:31a', fajrJamaat: '5:30a', sunrise: '6:10a', dhuhr: '1:07p', dhuhrJamaat: '1:30p',         asr: '5:45p', asrJamaat: '6:45p', maghrib: '7:57p', maghribJamaat: '7:57p', isha: '9:10p', ishaJamaat: '9:30p' },
      { day: 'TUE', date: '14', hijri: '26th Shawwal',     fajr: '4:28a', fajrJamaat: '5:30a', sunrise: '6:08a', dhuhr: '1:07p', dhuhrJamaat: '1:30p',         asr: '5:46p', asrJamaat: '6:45p', maghrib: '7:59p', maghribJamaat: '7:59p', isha: '9:11p', ishaJamaat: '9:30p' },
      { day: 'WED', date: '15', hijri: '27th Shawwal',     fajr: '4:26a', fajrJamaat: '5:30a', sunrise: '6:06a', dhuhr: '1:07p', dhuhrJamaat: '1:30p',         asr: '5:47p', asrJamaat: '6:45p', maghrib: '8:01p', maghribJamaat: '8:01p', isha: '9:12p', ishaJamaat: '9:30p' },
      { day: 'THU', date: '16', hijri: '28th Shawwal',     fajr: '4:23a', fajrJamaat: '5:30a', sunrise: '6:04a', dhuhr: '1:06p', dhuhrJamaat: '1:30p',         asr: '5:48p', asrJamaat: '6:45p', maghrib: '8:02p', maghribJamaat: '8:02p', isha: '9:14p', ishaJamaat: '9:30p' },
      { day: 'FRI', date: '17', hijri: '29th Shawwal',     fajr: '4:21a', fajrJamaat: '5:15a', sunrise: '6:02a', dhuhr: '1:06p', dhuhrJamaat: '1:30p / 2:00p', asr: '5:49p', asrJamaat: '6:45p', maghrib: '8:04p', maghribJamaat: '8:04p', isha: '9:15p', ishaJamaat: '9:30p',  isFriday: true },
      { day: 'SAT', date: '18', hijri: "1st Dhul Qa'dah",  fajr: '4:19a', fajrJamaat: '5:15a', sunrise: '6:00a', dhuhr: '1:06p', dhuhrJamaat: '1:30p',         asr: '5:51p', asrJamaat: '6:45p', maghrib: '8:06p', maghribJamaat: '8:06p', isha: '9:17p', ishaJamaat: '9:30p' },
      { day: 'SUN', date: '19', hijri: "2nd Dhul Qa'dah",  fajr: '4:16a', fajrJamaat: '5:15a', sunrise: '5:58a', dhuhr: '1:06p', dhuhrJamaat: '1:30p',         asr: '5:52p', asrJamaat: '6:45p', maghrib: '8:07p', maghribJamaat: '8:07p', isha: '9:18p', ishaJamaat: '9:30p' },
      { day: 'MON', date: '20', hijri: "3rd Dhul Qa'dah",  fajr: '4:14a', fajrJamaat: '5:15a', sunrise: '5:56a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '5:53p', asrJamaat: '6:45p', maghrib: '8:09p', maghribJamaat: '8:09p', isha: '9:20p', ishaJamaat: '9:30p' },
      { day: 'TUE', date: '21', hijri: "4th Dhul Qa'dah",  fajr: '4:11a', fajrJamaat: '5:15a', sunrise: '5:53a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '5:54p', asrJamaat: '6:45p', maghrib: '8:11p', maghribJamaat: '8:11p', isha: '9:21p', ishaJamaat: '9:30p' },
      { day: 'WED', date: '22', hijri: "5th Dhul Qa'dah",  fajr: '4:09a', fajrJamaat: '5:15a', sunrise: '5:51a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '5:55p', asrJamaat: '6:45p', maghrib: '8:12p', maghribJamaat: '8:12p', isha: '9:22p', ishaJamaat: '9:30p' },
      { day: 'THU', date: '23', hijri: "6th Dhul Qa'dah",  fajr: '4:07a', fajrJamaat: '5:15a', sunrise: '5:49a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '5:56p', asrJamaat: '6:45p', maghrib: '8:14p', maghribJamaat: '8:14p', isha: '9:24p', ishaJamaat: '9:30p' },
      { day: 'FRI', date: '24', hijri: "7th Dhul Qa'dah",  fajr: '4:04a', fajrJamaat: '5:00a', sunrise: '5:47a', dhuhr: '1:05p', dhuhrJamaat: '1:30p / 2:00p', asr: '5:57p', asrJamaat: '7:15p', maghrib: '8:16p', maghribJamaat: '8:16p', isha: '9:25p', ishaJamaat: '9:45p',  isFriday: true },
      { day: 'SAT', date: '25', hijri: "8th Dhul Qa'dah",  fajr: '4:02a', fajrJamaat: '5:00a', sunrise: '5:45a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '5:58p', asrJamaat: '7:15p', maghrib: '8:17p', maghribJamaat: '8:17p', isha: '9:27p', ishaJamaat: '9:45p' },
      { day: 'SUN', date: '26', hijri: "9th Dhul Qa'dah",  fajr: '4:00a', fajrJamaat: '5:00a', sunrise: '5:43a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '5:59p', asrJamaat: '7:15p', maghrib: '8:19p', maghribJamaat: '8:19p', isha: '9:28p', ishaJamaat: '9:45p' },
      { day: 'MON', date: '27', hijri: "10th Dhul Qa'dah", fajr: '3:58a', fajrJamaat: '5:00a', sunrise: '5:41a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:00p', asrJamaat: '7:15p', maghrib: '8:21p', maghribJamaat: '8:21p', isha: '9:30p', ishaJamaat: '9:45p' },
      { day: 'TUE', date: '28', hijri: "11th Dhul Qa'dah", fajr: '3:55a', fajrJamaat: '5:00a', sunrise: '5:39a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:01p', asrJamaat: '7:15p', maghrib: '8:22p', maghribJamaat: '8:22p', isha: '9:31p', ishaJamaat: '9:45p' },
      { day: 'WED', date: '29', hijri: "12th Dhul Qa'dah", fajr: '3:53a', fajrJamaat: '5:00a', sunrise: '5:37a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:02p', asrJamaat: '7:15p', maghrib: '8:24p', maghribJamaat: '8:24p', isha: '9:32p', ishaJamaat: '9:45p' },
      { day: 'THU', date: '30', hijri: "13th Dhul Qa'dah", fajr: '3:51a', fajrJamaat: '5:00a', sunrise: '5:35a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:03p', asrJamaat: '7:15p', maghrib: '8:26p', maghribJamaat: '8:26p', isha: '9:34p', ishaJamaat: '9:45p' }
    ]
  },

  may: {
    displayName: 'May 2026',
    hijriMonth: "Dhul Qa'dah / Dhul Hijjah 1447",
    days: [
      { day: 'FRI', date: '1',  hijri: "14th Dhul Qa'dah", fajr: '3:49a', fajrJamaat: '4:45a', sunrise: '5:34a', dhuhr: '1:03p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:04p', asrJamaat: '7:15p', maghrib: '8:27p', maghribJamaat: '8:27p', isha: '9:35p',  ishaJamaat: '9:45p',   isFriday: true },
      { day: 'SAT', date: '2',  hijri: "15th Dhul Qa'dah", fajr: '3:47a', fajrJamaat: '4:45a', sunrise: '5:32a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:05p', asrJamaat: '7:15p', maghrib: '8:29p', maghribJamaat: '8:29p', isha: '9:37p',  ishaJamaat: '9:45p' },
      { day: 'SUN', date: '3',  hijri: "16th Dhul Qa'dah", fajr: '3:44a', fajrJamaat: '4:45a', sunrise: '5:30a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:06p', asrJamaat: '7:15p', maghrib: '8:31p', maghribJamaat: '8:31p', isha: '9:38p',  ishaJamaat: '9:45p' },
      { day: 'MON', date: '4',  hijri: "17th Dhul Qa'dah", fajr: '3:42a', fajrJamaat: '4:45a', sunrise: '5:28a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:07p', asrJamaat: '7:15p', maghrib: '8:32p', maghribJamaat: '8:32p', isha: '9:39p',  ishaJamaat: '9:45p' },
      { day: 'TUE', date: '5',  hijri: "18th Dhul Qa'dah", fajr: '3:40a', fajrJamaat: '4:45a', sunrise: '5:26a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:08p', asrJamaat: '7:15p', maghrib: '8:34p', maghribJamaat: '8:34p', isha: '9:41p',  ishaJamaat: '9:45p' },
      { day: 'WED', date: '6',  hijri: "19th Dhul Qa'dah", fajr: '3:38a', fajrJamaat: '4:45a', sunrise: '5:24a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:09p', asrJamaat: '7:15p', maghrib: '8:36p', maghribJamaat: '8:36p', isha: '9:42p',  ishaJamaat: '9:45p' },
      { day: 'THU', date: '7',  hijri: "20th Dhul Qa'dah", fajr: '3:36a', fajrJamaat: '4:45a', sunrise: '5:23a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:10p', asrJamaat: '7:15p', maghrib: '8:37p', maghribJamaat: '8:37p', isha: '9:43p',  ishaJamaat: '9:45p' },
      { day: 'FRI', date: '8',  hijri: "21st Dhul Qa'dah", fajr: '3:34a', fajrJamaat: '4:30a', sunrise: '5:21a', dhuhr: '1:03p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:11p', asrJamaat: '7:30p', maghrib: '8:39p', maghribJamaat: '8:39p', isha: '9:45p',  ishaJamaat: '10:00p',  isFriday: true },
      { day: 'SAT', date: '9',  hijri: "22nd Dhul Qa'dah", fajr: '3:32a', fajrJamaat: '4:30a', sunrise: '5:19a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:12p', asrJamaat: '7:30p', maghrib: '8:40p', maghribJamaat: '8:40p', isha: '9:47p',  ishaJamaat: '10:00p' },
      { day: 'SUN', date: '10', hijri: "23rd Dhul Qa'dah", fajr: '3:30a', fajrJamaat: '4:30a', sunrise: '5:18a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:13p', asrJamaat: '7:30p', maghrib: '8:42p', maghribJamaat: '8:42p', isha: '9:49p',  ishaJamaat: '10:00p' },
      { day: 'MON', date: '11', hijri: "24th Dhul Qa'dah", fajr: '3:28a', fajrJamaat: '4:30a', sunrise: '5:16a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:14p', asrJamaat: '7:30p', maghrib: '8:43p', maghribJamaat: '8:43p', isha: '9:51p',  ishaJamaat: '10:00p' },
      { day: 'TUE', date: '12', hijri: "25th Dhul Qa'dah", fajr: '3:26a', fajrJamaat: '4:30a', sunrise: '5:14a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:15p', asrJamaat: '7:30p', maghrib: '8:45p', maghribJamaat: '8:45p', isha: '9:53p',  ishaJamaat: '10:00p' },
      { day: 'WED', date: '13', hijri: "26th Dhul Qa'dah", fajr: '3:24a', fajrJamaat: '4:30a', sunrise: '5:13a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:16p', asrJamaat: '7:30p', maghrib: '8:47p', maghribJamaat: '8:47p', isha: '9:55p',  ishaJamaat: '10:00p' },
      { day: 'THU', date: '14', hijri: "27th Dhul Qa'dah", fajr: '3:23a', fajrJamaat: '4:30a', sunrise: '5:11a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:17p', asrJamaat: '7:30p', maghrib: '8:48p', maghribJamaat: '8:48p', isha: '9:57p',  ishaJamaat: '10:00p' },
      { day: 'FRI', date: '15', hijri: "28th Dhul Qa'dah", fajr: '3:21a', fajrJamaat: '4:30a', sunrise: '5:10a', dhuhr: '1:03p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:18p', asrJamaat: '7:45p', maghrib: '8:50p', maghribJamaat: '8:50p', isha: '9:58p',  ishaJamaat: '10:15p',  isFriday: true },
      { day: 'SAT', date: '16', hijri: "29th Dhul Qa'dah", fajr: '3:19a', fajrJamaat: '4:30a', sunrise: '5:08a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:19p', asrJamaat: '7:45p', maghrib: '8:51p', maghribJamaat: '8:51p', isha: '10:00p', ishaJamaat: '10:15p' },
      { day: 'SUN', date: '17', hijri: "30th Dhul Qa'dah", fajr: '3:17a', fajrJamaat: '4:30a', sunrise: '5:07a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:20p', asrJamaat: '7:45p', maghrib: '8:53p', maghribJamaat: '8:53p', isha: '10:02p', ishaJamaat: '10:15p' },
      { day: 'MON', date: '18', hijri: '1st Dhul Hijjah',  fajr: '3:16a', fajrJamaat: '4:30a', sunrise: '5:05a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:20p', asrJamaat: '7:45p', maghrib: '8:54p', maghribJamaat: '8:54p', isha: '10:04p', ishaJamaat: '10:15p' },
      { day: 'TUE', date: '19', hijri: '2nd Dhul Hijjah',  fajr: '3:14a', fajrJamaat: '4:30a', sunrise: '5:04a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:21p', asrJamaat: '7:45p', maghrib: '8:55p', maghribJamaat: '8:55p', isha: '10:06p', ishaJamaat: '10:15p' },
      { day: 'WED', date: '20', hijri: '3rd Dhul Hijjah',  fajr: '3:12a', fajrJamaat: '4:30a', sunrise: '5:03a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:22p', asrJamaat: '7:45p', maghrib: '8:57p', maghribJamaat: '8:57p', isha: '10:07p', ishaJamaat: '10:15p' },
      { day: 'THU', date: '21', hijri: '4th Dhul Hijjah',  fajr: '3:11a', fajrJamaat: '4:30a', sunrise: '5:01a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:23p', asrJamaat: '7:45p', maghrib: '8:58p', maghribJamaat: '8:58p', isha: '10:09p', ishaJamaat: '10:15p' },
      { day: 'FRI', date: '22', hijri: '5th Dhul Hijjah',  fajr: '3:09a', fajrJamaat: '4:15a', sunrise: '5:00a', dhuhr: '1:03p', dhuhrJamaat: '1:30p - 2:00p', asr: '6:24p', asrJamaat: '7:45p', maghrib: '9:00p', maghribJamaat: '9:00p', isha: '10:11p', ishaJamaat: '10:25p',  isFriday: true },
      { day: 'SAT', date: '23', hijri: '6th Dhul Hijjah',  fajr: '3:08a', fajrJamaat: '4:15a', sunrise: '4:59a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:25p', asrJamaat: '7:45p', maghrib: '9:01p', maghribJamaat: '9:01p', isha: '10:12p', ishaJamaat: '10:25p' },
      { day: 'SUN', date: '24', hijri: '7th Dhul Hijjah',  fajr: '3:06a', fajrJamaat: '4:15a', sunrise: '4:58a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:25p', asrJamaat: '7:45p', maghrib: '9:02p', maghribJamaat: '9:02p', isha: '10:14p', ishaJamaat: '10:25p' },
      { day: 'MON', date: '25', hijri: '8th Dhul Hijjah',  fajr: '3:05a', fajrJamaat: '4:15a', sunrise: '4:57a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:26p', asrJamaat: '7:45p', maghrib: '9:04p', maghribJamaat: '9:04p', isha: '10:16p', ishaJamaat: '10:25p' },
      { day: 'TUE', date: '26', hijri: '9th Dhul Hijjah',  fajr: '3:03a', fajrJamaat: '4:15a', sunrise: '4:56a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:27p', asrJamaat: '7:45p', maghrib: '9:05p', maghribJamaat: '9:05p', isha: '10:17p', ishaJamaat: '10:25p' },
      { day: 'WED', date: '27', hijri: '10th Dhul Hijjah', fajr: '3:02a', fajrJamaat: '4:15a', sunrise: '4:55a', dhuhr: '1:03p', dhuhrJamaat: '1:30p',         asr: '6:28p', asrJamaat: '7:45p', maghrib: '9:06p', maghribJamaat: '9:06p', isha: '10:19p', ishaJamaat: '10:25p' },
      { day: 'THU', date: '28', hijri: '11th Dhul Hijjah', fajr: '3:01a', fajrJamaat: '4:15a', sunrise: '4:54a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:28p', asrJamaat: '7:45p', maghrib: '9:07p', maghribJamaat: '9:07p', isha: '10:20p', ishaJamaat: '10:25p' },
      { day: 'FRI', date: '29', hijri: '12th Dhul Hijjah', fajr: '3:00a', fajrJamaat: '4:15a', sunrise: '4:53a', dhuhr: '1:04p', dhuhrJamaat: '1:30p - 2:00p', asr: '6:29p', asrJamaat: '8:00p', maghrib: '9:09p', maghribJamaat: '9:09p', isha: '10:22p', ishaJamaat: '10:35p',  isFriday: true },
      { day: 'SAT', date: '30', hijri: '13th Dhul Hijjah', fajr: '2:58a', fajrJamaat: '4:15a', sunrise: '4:52a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:30p', asrJamaat: '8:00p', maghrib: '9:10p', maghribJamaat: '9:10p', isha: '10:23p', ishaJamaat: '10:35p' },
      { day: 'SUN', date: '31', hijri: '14th Dhul Hijjah', fajr: '2:57a', fajrJamaat: '4:15a', sunrise: '4:51a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:31p', asrJamaat: '8:00p', maghrib: '9:11p', maghribJamaat: '9:11p', isha: '10:25p', ishaJamaat: '10:35p' }
    ]
  },

  june: {
    displayName: 'June 2026',
    hijriMonth: 'Dhul Hijjah / Muharram 1448',
    days: [
      { day: 'MON', date: '1',  hijri: '15th Dhul Hijjah', fajr: '2:56a', fajrJamaat: '4:15a', sunrise: '4:50a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:31p', asrJamaat: '8:00p', maghrib: '9:12p', maghribJamaat: '9:12p', isha: '10:26p', ishaJamaat: '10:35p' },
      { day: 'TUE', date: '2',  hijri: '16th Dhul Hijjah', fajr: '2:55a', fajrJamaat: '4:15a', sunrise: '4:49a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:32p', asrJamaat: '8:00p', maghrib: '9:13p', maghribJamaat: '9:13p', isha: '10:27p', ishaJamaat: '10:35p' },
      { day: 'WED', date: '3',  hijri: '17th Dhul Hijjah', fajr: '2:54a', fajrJamaat: '4:15a', sunrise: '4:48a', dhuhr: '1:04p', dhuhrJamaat: '1:30p',         asr: '6:33p', asrJamaat: '8:00p', maghrib: '9:14p', maghribJamaat: '9:14p', isha: '10:29p', ishaJamaat: '10:35p' },
      { day: 'THU', date: '4',  hijri: '18th Dhul Hijjah', fajr: '2:53a', fajrJamaat: '4:15a', sunrise: '4:48a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '6:33p', asrJamaat: '8:00p', maghrib: '9:15p', maghribJamaat: '9:15p', isha: '10:30p', ishaJamaat: '10:35p' },
      { day: 'FRI', date: '5',  hijri: '19th Dhul Hijjah', fajr: '2:52a', fajrJamaat: '4:00a', sunrise: '4:47a', dhuhr: '1:05p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:34p', asrJamaat: '8:00p', maghrib: '9:16p', maghribJamaat: '9:16p', isha: '10:31p', ishaJamaat: '10:45p',  isFriday: true },
      { day: 'SAT', date: '6',  hijri: '20th Dhul Hijjah', fajr: '2:51a', fajrJamaat: '4:00a', sunrise: '4:47a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '6:34p', asrJamaat: '8:00p', maghrib: '9:17p', maghribJamaat: '9:17p', isha: '10:33p', ishaJamaat: '10:45p' },
      { day: 'SUN', date: '7',  hijri: '21st Dhul Hijjah', fajr: '2:50a', fajrJamaat: '4:00a', sunrise: '4:46a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '6:35p', asrJamaat: '8:00p', maghrib: '9:18p', maghribJamaat: '9:18p', isha: '10:34p', ishaJamaat: '10:45p' },
      { day: 'MON', date: '8',  hijri: '22nd Dhul Hijjah', fajr: '2:50a', fajrJamaat: '4:00a', sunrise: '4:46a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '6:35p', asrJamaat: '8:00p', maghrib: '9:19p', maghribJamaat: '9:19p', isha: '10:35p', ishaJamaat: '10:45p' },
      { day: 'TUE', date: '9',  hijri: '23rd Dhul Hijjah', fajr: '2:49a', fajrJamaat: '4:00a', sunrise: '4:45a', dhuhr: '1:05p', dhuhrJamaat: '1:30p',         asr: '6:36p', asrJamaat: '8:00p', maghrib: '9:19p', maghribJamaat: '9:19p', isha: '10:36p', ishaJamaat: '10:45p' },
      { day: 'WED', date: '10', hijri: '24th Dhul Hijjah', fajr: '2:48a', fajrJamaat: '4:00a', sunrise: '4:45a', dhuhr: '1:06p', dhuhrJamaat: '1:30p',         asr: '6:36p', asrJamaat: '8:00p', maghrib: '9:20p', maghribJamaat: '9:20p', isha: '10:37p', ishaJamaat: '10:45p' },
      { day: 'THU', date: '11', hijri: '25th Dhul Hijjah', fajr: '2:48a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:06p', dhuhrJamaat: '1:30p',         asr: '6:37p', asrJamaat: '8:00p', maghrib: '9:21p', maghribJamaat: '9:21p', isha: '10:38p', ishaJamaat: '10:45p' },
      { day: 'FRI', date: '12', hijri: '26th Dhul Hijjah', fajr: '2:47a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:06p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:37p', asrJamaat: '8:00p', maghrib: '9:22p', maghribJamaat: '9:22p', isha: '10:39p', ishaJamaat: '10:50p',  isFriday: true },
      { day: 'SAT', date: '13', hijri: '27th Dhul Hijjah', fajr: '2:46a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:06p', dhuhrJamaat: '1:30p',         asr: '6:38p', asrJamaat: '8:00p', maghrib: '9:22p', maghribJamaat: '9:22p', isha: '10:40p', ishaJamaat: '10:50p' },
      { day: 'SUN', date: '14', hijri: '28th Dhul Hijjah', fajr: '2:46a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:06p', dhuhrJamaat: '1:30p',         asr: '6:38p', asrJamaat: '8:00p', maghrib: '9:23p', maghribJamaat: '9:23p', isha: '10:41p', ishaJamaat: '10:50p' },
      { day: 'MON', date: '15', hijri: '29th Dhul Hijjah', fajr: '2:46a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:07p', dhuhrJamaat: '1:30p',         asr: '6:39p', asrJamaat: '8:00p', maghrib: '9:23p', maghribJamaat: '9:23p', isha: '10:42p', ishaJamaat: '10:50p' },
      { day: 'TUE', date: '16', hijri: '1st Muharram',     fajr: '2:45a', fajrJamaat: '4:00a', sunrise: '4:43a', dhuhr: '1:07p', dhuhrJamaat: '1:30p',         asr: '6:39p', asrJamaat: '8:00p', maghrib: '9:24p', maghribJamaat: '9:24p', isha: '10:43p', ishaJamaat: '10:50p' },
      { day: 'WED', date: '17', hijri: '2nd Muharram',     fajr: '2:45a', fajrJamaat: '4:00a', sunrise: '4:43a', dhuhr: '1:07p', dhuhrJamaat: '1:30p',         asr: '6:39p', asrJamaat: '8:00p', maghrib: '9:24p', maghribJamaat: '9:24p', isha: '10:43p', ishaJamaat: '10:50p' },
      { day: 'THU', date: '18', hijri: '3rd Muharram',     fajr: '2:45a', fajrJamaat: '4:00a', sunrise: '4:43a', dhuhr: '1:07p', dhuhrJamaat: '1:30p',         asr: '6:40p', asrJamaat: '8:00p', maghrib: '9:24p', maghribJamaat: '9:24p', isha: '10:44p', ishaJamaat: '10:50p' },
      { day: 'FRI', date: '19', hijri: '4th Muharram',     fajr: '2:44a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:08p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:40p', asrJamaat: '8:00p', maghrib: '9:25p', maghribJamaat: '9:25p', isha: '10:45p', ishaJamaat: '10:50p',  isFriday: true },
      { day: 'SAT', date: '20', hijri: '5th Muharram',     fajr: '2:44a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:08p', dhuhrJamaat: '1:30p',         asr: '6:40p', asrJamaat: '8:00p', maghrib: '9:25p', maghribJamaat: '9:25p', isha: '10:45p', ishaJamaat: '10:50p' },
      { day: 'SUN', date: '21', hijri: '6th Muharram',     fajr: '2:44a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:08p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:25p', maghribJamaat: '9:25p', isha: '10:46p', ishaJamaat: '10:50p' },
      { day: 'MON', date: '22', hijri: '7th Muharram',     fajr: '2:44a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:08p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:26p', maghribJamaat: '9:26p', isha: '10:46p', ishaJamaat: '10:50p' },
      { day: 'TUE', date: '23', hijri: '8th Muharram',     fajr: '2:45a', fajrJamaat: '4:00a', sunrise: '4:44a', dhuhr: '1:08p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:26p', maghribJamaat: '9:26p', isha: '10:46p', ishaJamaat: '10:50p' },
      { day: 'WED', date: '24', hijri: '9th Muharram',     fajr: '2:45a', fajrJamaat: '4:00a', sunrise: '4:45a', dhuhr: '1:09p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:26p', maghribJamaat: '9:26p', isha: '10:46p', ishaJamaat: '10:50p' },
      { day: 'THU', date: '25', hijri: '10th Muharram',    fajr: '2:46a', fajrJamaat: '4:00a', sunrise: '4:45a', dhuhr: '1:09p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:26p', maghribJamaat: '9:26p', isha: '10:46p', ishaJamaat: '10:50p' },
      { day: 'FRI', date: '26', hijri: '11th Muharram',    fajr: '2:47a', fajrJamaat: '4:00a', sunrise: '4:45a', dhuhr: '1:09p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:26p', maghribJamaat: '9:26p', isha: '10:45p', ishaJamaat: '10:50p',  isFriday: true },
      { day: 'SAT', date: '27', hijri: '12th Muharram',    fajr: '2:47a', fajrJamaat: '4:00a', sunrise: '4:45a', dhuhr: '1:09p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:26p', maghribJamaat: '9:26p', isha: '10:45p', ishaJamaat: '10:50p' },
      { day: 'SUN', date: '28', hijri: '13th Muharram',    fajr: '2:48a', fajrJamaat: '4:00a', sunrise: '4:46a', dhuhr: '1:09p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:25p', maghribJamaat: '9:25p', isha: '10:44p', ishaJamaat: '10:50p' },
      { day: 'MON', date: '29', hijri: '14th Muharram',    fajr: '2:49a', fajrJamaat: '4:00a', sunrise: '4:47a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:25p', maghribJamaat: '9:25p', isha: '10:44p', ishaJamaat: '10:50p' },
      { day: 'TUE', date: '30', hijri: '15th Muharram',    fajr: '2:50a', fajrJamaat: '5:00a', sunrise: '4:48a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:25p', maghribJamaat: '9:25p', isha: '10:43p', ishaJamaat: '10:50p' }
    ]
  },

  july: {
    displayName: 'July 2026',
    hijriMonth: 'Muharram / Safar 1448',
    days: [
      { day: 'WED', date: '1',  hijri: '16th Muharram', fajr: '2:51a', fajrJamaat: '4:15a', sunrise: '4:49a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:24p', maghribJamaat: '9:24p', isha: '10:42p', ishaJamaat: '10:50p' },
      { day: 'THU', date: '2',  hijri: '17th Muharram', fajr: '2:53a', fajrJamaat: '4:15a', sunrise: '4:50a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:24p', maghribJamaat: '9:24p', isha: '10:41p', ishaJamaat: '10:50p' },
      { day: 'FRI', date: '3',  hijri: '18th Muharram', fajr: '2:54a', fajrJamaat: '4:15a', sunrise: '4:51a', dhuhr: '1:10p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:41p', asrJamaat: '8:00p', maghrib: '9:23p', maghribJamaat: '9:23p', isha: '10:40p', ishaJamaat: '10:50p',  isFriday: true },
      { day: 'SAT', date: '4',  hijri: '19th Muharram', fajr: '2:56a', fajrJamaat: '4:15a', sunrise: '4:52a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:40p', asrJamaat: '8:00p', maghrib: '9:23p', maghribJamaat: '9:23p', isha: '10:39p', ishaJamaat: '10:50p' },
      { day: 'SUN', date: '5',  hijri: '20th Muharram', fajr: '2:57a', fajrJamaat: '4:15a', sunrise: '4:53a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:40p', asrJamaat: '8:00p', maghrib: '9:22p', maghribJamaat: '9:22p', isha: '10:37p', ishaJamaat: '10:50p' },
      { day: 'MON', date: '6',  hijri: '21st Muharram', fajr: '2:59a', fajrJamaat: '4:15a', sunrise: '4:54a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:40p', asrJamaat: '8:00p', maghrib: '9:21p', maghribJamaat: '9:21p', isha: '10:36p', ishaJamaat: '10:50p' },
      { day: 'TUE', date: '7',  hijri: '22nd Muharram', fajr: '3:01a', fajrJamaat: '4:15a', sunrise: '4:55a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:40p', asrJamaat: '8:00p', maghrib: '9:21p', maghribJamaat: '9:21p', isha: '10:35p', ishaJamaat: '10:50p' },
      { day: 'WED', date: '8',  hijri: '23rd Muharram', fajr: '3:03a', fajrJamaat: '4:15a', sunrise: '4:56a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:39p', asrJamaat: '8:00p', maghrib: '9:20p', maghribJamaat: '9:20p', isha: '10:33p', ishaJamaat: '10:50p' },
      { day: 'THU', date: '9',  hijri: '24th Muharram', fajr: '3:04a', fajrJamaat: '4:15a', sunrise: '4:57a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:39p', asrJamaat: '8:00p', maghrib: '9:19p', maghribJamaat: '9:19p', isha: '10:32p', ishaJamaat: '10:50p' },
      { day: 'FRI', date: '10', hijri: '25th Muharram', fajr: '3:06a', fajrJamaat: '4:30a', sunrise: '4:58a', dhuhr: '1:11p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:38p', asrJamaat: '7:45p', maghrib: '9:18p', maghribJamaat: '9:18p', isha: '10:30p', ishaJamaat: '10:40p',  isFriday: true },
      { day: 'SAT', date: '11', hijri: '26th Muharram', fajr: '3:08a', fajrJamaat: '4:30a', sunrise: '4:59a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:38p', asrJamaat: '7:45p', maghrib: '9:17p', maghribJamaat: '9:17p', isha: '10:29p', ishaJamaat: '10:40p' },
      { day: 'SUN', date: '12', hijri: '27th Muharram', fajr: '3:10a', fajrJamaat: '4:30a', sunrise: '5:01a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:37p', asrJamaat: '7:45p', maghrib: '9:16p', maghribJamaat: '9:16p', isha: '10:27p', ishaJamaat: '10:40p' },
      { day: 'MON', date: '13', hijri: '28th Muharram', fajr: '3:12a', fajrJamaat: '4:30a', sunrise: '5:02a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:37p', asrJamaat: '7:45p', maghrib: '9:15p', maghribJamaat: '9:15p', isha: '10:25p', ishaJamaat: '10:40p' },
      { day: 'TUE', date: '14', hijri: '29th Muharram', fajr: '3:14a', fajrJamaat: '4:30a', sunrise: '5:03a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:36p', asrJamaat: '7:45p', maghrib: '9:14p', maghribJamaat: '9:14p', isha: '10:24p', ishaJamaat: '10:40p' },
      { day: 'WED', date: '15', hijri: '30th Muharram', fajr: '3:16a', fajrJamaat: '4:30a', sunrise: '5:05a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:35p', asrJamaat: '7:45p', maghrib: '9:12p', maghribJamaat: '9:12p', isha: '10:22p', ishaJamaat: '10:40p' },
      { day: 'THU', date: '16', hijri: '1st Safar',     fajr: '3:18a', fajrJamaat: '4:30a', sunrise: '5:06a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:34p', asrJamaat: '7:45p', maghrib: '9:11p', maghribJamaat: '9:11p', isha: '10:20p', ishaJamaat: '10:40p' },
      { day: 'FRI', date: '17', hijri: '2nd Safar',     fajr: '3:20a', fajrJamaat: '4:30a', sunrise: '5:07a', dhuhr: '1:12p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:33p', asrJamaat: '7:45p', maghrib: '9:10p', maghribJamaat: '9:10p', isha: '10:18p', ishaJamaat: '10:40p',  isFriday: true },
      { day: 'SAT', date: '18', hijri: '3rd Safar',     fajr: '3:22a', fajrJamaat: '4:30a', sunrise: '5:09a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:33p', asrJamaat: '7:45p', maghrib: '9:08p', maghribJamaat: '9:08p', isha: '10:17p', ishaJamaat: '10:40p' },
      { day: 'SUN', date: '19', hijri: '4th Safar',     fajr: '3:24a', fajrJamaat: '4:30a', sunrise: '5:10a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:32p', asrJamaat: '7:45p', maghrib: '9:07p', maghribJamaat: '9:07p', isha: '10:15p', ishaJamaat: '10:40p' },
      { day: 'MON', date: '20', hijri: '5th Safar',     fajr: '3:26a', fajrJamaat: '4:30a', sunrise: '5:11a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:31p', asrJamaat: '7:45p', maghrib: '9:06p', maghribJamaat: '9:06p', isha: '10:13p', ishaJamaat: '10:40p' },
      { day: 'TUE', date: '21', hijri: '6th Safar',     fajr: '3:28a', fajrJamaat: '4:30a', sunrise: '5:13a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:30p', asrJamaat: '7:45p', maghrib: '9:04p', maghribJamaat: '9:04p', isha: '10:11p', ishaJamaat: '10:40p' },
      { day: 'WED', date: '22', hijri: '7th Safar',     fajr: '3:30a', fajrJamaat: '4:30a', sunrise: '5:14a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:29p', asrJamaat: '7:45p', maghrib: '9:03p', maghribJamaat: '9:03p', isha: '10:09p', ishaJamaat: '10:40p' },
      { day: 'THU', date: '23', hijri: '8th Safar',     fajr: '3:32a', fajrJamaat: '4:30a', sunrise: '5:16a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:28p', asrJamaat: '7:45p', maghrib: '9:01p', maghribJamaat: '9:01p', isha: '10:07p', ishaJamaat: '10:40p' },
      { day: 'FRI', date: '24', hijri: '9th Safar',     fajr: '3:34a', fajrJamaat: '4:45a', sunrise: '5:17a', dhuhr: '1:12p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:27p', asrJamaat: '7:30p', maghrib: '9:00p', maghribJamaat: '9:00p', isha: '10:05p', ishaJamaat: '10:20p',  isFriday: true },
      { day: 'SAT', date: '25', hijri: '10th Safar',    fajr: '3:36a', fajrJamaat: '4:45a', sunrise: '5:19a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:26p', asrJamaat: '7:30p', maghrib: '8:58p', maghribJamaat: '8:58p', isha: '10:03p', ishaJamaat: '10:20p' },
      { day: 'SUN', date: '26', hijri: '11th Safar',    fajr: '3:38a', fajrJamaat: '4:45a', sunrise: '5:20a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:25p', asrJamaat: '7:30p', maghrib: '8:57p', maghribJamaat: '8:57p', isha: '10:01p', ishaJamaat: '10:20p' },
      { day: 'MON', date: '27', hijri: '12th Safar',    fajr: '3:40a', fajrJamaat: '4:45a', sunrise: '5:22a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:24p', asrJamaat: '7:30p', maghrib: '8:55p', maghribJamaat: '8:55p', isha: '9:59p',  ishaJamaat: '10:20p' },
      { day: 'TUE', date: '28', hijri: '13th Safar',    fajr: '3:43a', fajrJamaat: '4:45a', sunrise: '5:23a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:23p', asrJamaat: '7:30p', maghrib: '8:54p', maghribJamaat: '8:54p', isha: '9:57p',  ishaJamaat: '10:20p' },
      { day: 'WED', date: '29', hijri: '14th Safar',    fajr: '3:45a', fajrJamaat: '4:45a', sunrise: '5:25a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:22p', asrJamaat: '7:30p', maghrib: '8:52p', maghribJamaat: '8:52p', isha: '9:55p',  ishaJamaat: '10:20p' },
      { day: 'THU', date: '30', hijri: '15th Safar',    fajr: '3:47a', fajrJamaat: '4:45a', sunrise: '5:26a', dhuhr: '1:12p', dhuhrJamaat: '1:30p',         asr: '6:21p', asrJamaat: '7:30p', maghrib: '8:50p', maghribJamaat: '8:50p', isha: '9:53p',  ishaJamaat: '10:20p' },
      { day: 'FRI', date: '31', hijri: '16th Safar',    fajr: '3:49a', fajrJamaat: '5:00a', sunrise: '5:28a', dhuhr: '1:11p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:20p', asrJamaat: '7:15p', maghrib: '8:49p', maghribJamaat: '8:49p', isha: '9:51p',  ishaJamaat: '10:15p',  isFriday: true }
    ]
  },

  august: {
    displayName: 'August 2026',
    hijriMonth: 'Safar / Rabi\' al-Awwal 1448',
    days: [
      { day: 'SAT', date: '1',  hijri: '17th Safar', fajr: '3:51a', fajrJamaat: '5:00a', sunrise: '5:30a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:19p', asrJamaat: '7:15p', maghrib: '8:47p', maghribJamaat: '8:47p', isha: '9:49p', ishaJamaat: '10:15p' },
      { day: 'SUN', date: '2',  hijri: '18th Safar', fajr: '3:53a', fajrJamaat: '5:00a', sunrise: '5:31a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:18p', asrJamaat: '7:15p', maghrib: '8:46p', maghribJamaat: '8:46p', isha: '9:47p', ishaJamaat: '10:15p' },
      { day: 'MON', date: '3',  hijri: '19th Safar', fajr: '3:56a', fajrJamaat: '5:00a', sunrise: '5:33a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:17p', asrJamaat: '7:15p', maghrib: '8:44p', maghribJamaat: '8:44p', isha: '9:45p', ishaJamaat: '10:15p' },
      { day: 'TUE', date: '4',  hijri: '20th Safar', fajr: '3:58a', fajrJamaat: '5:00a', sunrise: '5:34a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:16p', asrJamaat: '7:15p', maghrib: '8:42p', maghribJamaat: '8:42p', isha: '9:43p', ishaJamaat: '10:15p' },
      { day: 'WED', date: '5',  hijri: '21st Safar', fajr: '4:00a', fajrJamaat: '5:00a', sunrise: '5:36a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:15p', asrJamaat: '7:15p', maghrib: '8:40p', maghribJamaat: '8:40p', isha: '9:41p', ishaJamaat: '10:15p' },
      { day: 'THU', date: '6',  hijri: '22nd Safar', fajr: '4:03a', fajrJamaat: '5:00a', sunrise: '5:37a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:13p', asrJamaat: '7:15p', maghrib: '8:39p', maghribJamaat: '8:39p', isha: '9:39p', ishaJamaat: '10:15p' },
      { day: 'FRI', date: '7',  hijri: '23rd Safar', fajr: '4:05a', fajrJamaat: '5:15a', sunrise: '5:39a', dhuhr: '1:11p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:12p', asrJamaat: '7:00p', maghrib: '8:37p', maghribJamaat: '8:37p', isha: '9:37p', ishaJamaat: '9:50p',   isFriday: true },
      { day: 'SAT', date: '8',  hijri: '24th Safar', fajr: '4:07a', fajrJamaat: '5:15a', sunrise: '5:41a', dhuhr: '1:11p', dhuhrJamaat: '1:30p',         asr: '6:11p', asrJamaat: '7:00p', maghrib: '8:35p', maghribJamaat: '8:35p', isha: '9:35p', ishaJamaat: '9:50p' },
      { day: 'SUN', date: '9',  hijri: '25th Safar', fajr: '4:09a', fajrJamaat: '5:15a', sunrise: '5:42a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:10p', asrJamaat: '7:00p', maghrib: '8:33p', maghribJamaat: '8:33p', isha: '9:33p', ishaJamaat: '9:50p' },
      { day: 'MON', date: '10', hijri: '26th Safar', fajr: '4:12a', fajrJamaat: '5:15a', sunrise: '5:44a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:08p', asrJamaat: '7:00p', maghrib: '8:31p', maghribJamaat: '8:31p', isha: '9:31p', ishaJamaat: '9:50p' },
      { day: 'TUE', date: '11', hijri: '27th Safar', fajr: '4:14a', fajrJamaat: '5:15a', sunrise: '5:45a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:07p', asrJamaat: '7:00p', maghrib: '8:29p', maghribJamaat: '8:29p', isha: '9:29p', ishaJamaat: '9:50p' },
      { day: 'WED', date: '12', hijri: '28th Safar', fajr: '4:17a', fajrJamaat: '5:15a', sunrise: '5:47a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:06p', asrJamaat: '7:00p', maghrib: '8:27p', maghribJamaat: '8:27p', isha: '9:27p', ishaJamaat: '9:50p' },
      { day: 'THU', date: '13', hijri: '29th Safar', fajr: '4:19a', fajrJamaat: '5:15a', sunrise: '5:49a', dhuhr: '1:10p', dhuhrJamaat: '1:30p',         asr: '6:04p', asrJamaat: '7:00p', maghrib: '8:25p', maghribJamaat: '8:25p', isha: '9:24p', ishaJamaat: '9:50p' },
      { day: 'FRI', date: '14', hijri: '30th Safar', fajr: '4:21a', fajrJamaat: '5:30a', sunrise: '5:50a', dhuhr: '1:10p', dhuhrJamaat: '1:30p / 2:00p', asr: '6:03p', asrJamaat: '7:00p', maghrib: '8:23p', maghribJamaat: '8:23p', isha: '9:22p', ishaJamaat: '9:40p',   isFriday: true },
      { day: 'SAT', date: '15', hijri: '1st Rabi\' al-Awwal', fajr: '4:24a', fajrJamaat: '5:30a', sunrise: '5:52a', dhuhr: '1:09p', dhuhrJamaat: '1:30p', asr: '6:01p', asrJamaat: '7:00p', maghrib: '8:21p', maghribJamaat: '8:21p', isha: '9:20p', ishaJamaat: '9:40p' },
      { day: 'SUN', date: '16', hijri: '2nd Rabi\' al-Awwal', fajr: '4:26a', fajrJamaat: '5:30a', sunrise: '5:54a', dhuhr: '1:09p', dhuhrJamaat: '1:30p', asr: '6:00p', asrJamaat: '7:00p', maghrib: '8:19p', maghribJamaat: '8:19p', isha: '9:18p', ishaJamaat: '9:40p' },
      { day: 'MON', date: '17', hijri: '3rd Rabi\' al-Awwal', fajr: '4:28a', fajrJamaat: '5:30a', sunrise: '5:55a', dhuhr: '1:09p', dhuhrJamaat: '1:30p', asr: '5:59p', asrJamaat: '7:00p', maghrib: '8:17p', maghribJamaat: '8:17p', isha: '9:16p', ishaJamaat: '9:40p' },
      { day: 'TUE', date: '18', hijri: '4th Rabi\' al-Awwal', fajr: '4:31a', fajrJamaat: '5:30a', sunrise: '5:57a', dhuhr: '1:09p', dhuhrJamaat: '1:30p', asr: '5:57p', asrJamaat: '7:00p', maghrib: '8:15p', maghribJamaat: '8:15p', isha: '9:14p', ishaJamaat: '9:40p' },
      { day: 'WED', date: '19', hijri: '5th Rabi\' al-Awwal', fajr: '4:33a', fajrJamaat: '5:30a', sunrise: '5:58a', dhuhr: '1:09p', dhuhrJamaat: '1:30p', asr: '5:56p', asrJamaat: '7:00p', maghrib: '8:13p', maghribJamaat: '8:13p', isha: '9:11p', ishaJamaat: '9:40p' },
      { day: 'THU', date: '20', hijri: '6th Rabi\' al-Awwal', fajr: '4:35a', fajrJamaat: '5:30a', sunrise: '6:00a', dhuhr: '1:08p', dhuhrJamaat: '1:30p', asr: '5:54p', asrJamaat: '7:00p', maghrib: '8:10p', maghribJamaat: '8:10p', isha: '9:09p', ishaJamaat: '9:40p' },
      { day: 'FRI', date: '21', hijri: '7th Rabi\' al-Awwal', fajr: '4:37a', fajrJamaat: '5:30a', sunrise: '6:02a', dhuhr: '1:08p', dhuhrJamaat: '1:30p / 2:00p', asr: '5:52p', asrJamaat: '6:45p', maghrib: '8:08p', maghribJamaat: '8:08p', isha: '9:07p', ishaJamaat: '9:25p',   isFriday: true },
      { day: 'SAT', date: '22', hijri: '8th Rabi\' al-Awwal', fajr: '4:40a', fajrJamaat: '5:30a', sunrise: '6:03a', dhuhr: '1:08p', dhuhrJamaat: '1:30p', asr: '5:51p', asrJamaat: '6:45p', maghrib: '8:06p', maghribJamaat: '8:06p', isha: '9:05p', ishaJamaat: '9:25p' },
      { day: 'SUN', date: '23', hijri: '9th Rabi\' al-Awwal', fajr: '4:42a', fajrJamaat: '5:30a', sunrise: '6:05a', dhuhr: '1:08p', dhuhrJamaat: '1:30p', asr: '5:49p', asrJamaat: '6:45p', maghrib: '8:04p', maghribJamaat: '8:04p', isha: '9:02p', ishaJamaat: '9:25p' },
      { day: 'MON', date: '24', hijri: '10th Rabi\' al-Awwal', fajr: '4:44a', fajrJamaat: '5:30a', sunrise: '6:07a', dhuhr: '1:08p', dhuhrJamaat: '1:30p', asr: '5:48p', asrJamaat: '6:45p', maghrib: '8:02p', maghribJamaat: '8:02p', isha: '9:00p', ishaJamaat: '9:25p' },
      { day: 'TUE', date: '25', hijri: '11th Rabi\' al-Awwal', fajr: '4:47a', fajrJamaat: '5:30a', sunrise: '6:08a', dhuhr: '1:07p', dhuhrJamaat: '1:30p', asr: '5:46p', asrJamaat: '6:45p', maghrib: '8:00p', maghribJamaat: '8:00p', isha: '8:58p', ishaJamaat: '9:25p' },
      { day: 'WED', date: '26', hijri: '12th Rabi\' al-Awwal', fajr: '4:49a', fajrJamaat: '5:30a', sunrise: '6:10a', dhuhr: '1:07p', dhuhrJamaat: '1:30p', asr: '5:45p', asrJamaat: '6:45p', maghrib: '7:58p', maghribJamaat: '7:58p', isha: '8:56p', ishaJamaat: '9:25p' },
      { day: 'THU', date: '27', hijri: '13th Rabi\' al-Awwal', fajr: '4:51a', fajrJamaat: '5:30a', sunrise: '6:11a', dhuhr: '1:07p', dhuhrJamaat: '1:30p', asr: '5:43p', asrJamaat: '6:45p', maghrib: '7:55p', maghribJamaat: '7:55p', isha: '8:53p', ishaJamaat: '9:25p' },
      { day: 'FRI', date: '28', hijri: '14th Rabi\' al-Awwal', fajr: '4:54a', fajrJamaat: '5:45a', sunrise: '6:13a', dhuhr: '1:07p', dhuhrJamaat: '1:30p / 2:00p', asr: '5:41p', asrJamaat: '6:30p', maghrib: '7:53p', maghribJamaat: '7:53p', isha: '8:51p', ishaJamaat: '9:15p',   isFriday: true },
      { day: 'SAT', date: '29', hijri: '15th Rabi\' al-Awwal', fajr: '4:56a', fajrJamaat: '5:45a', sunrise: '6:15a', dhuhr: '1:06p', dhuhrJamaat: '1:30p', asr: '5:40p', asrJamaat: '6:30p', maghrib: '7:51p', maghribJamaat: '7:51p', isha: '8:49p', ishaJamaat: '9:15p' },
      { day: 'SUN', date: '30', hijri: '16th Rabi\' al-Awwal', fajr: '4:58a', fajrJamaat: '5:45a', sunrise: '6:16a', dhuhr: '1:06p', dhuhrJamaat: '1:30p', asr: '5:38p', asrJamaat: '6:30p', maghrib: '7:49p', maghribJamaat: '7:49p', isha: '8:47p', ishaJamaat: '9:15p' },
      { day: 'MON', date: '31', hijri: '17th Rabi\' al-Awwal', fajr: '4:00a', fajrJamaat: '5:45a', sunrise: '6:18a', dhuhr: '1:06p', dhuhrJamaat: '1:30p', asr: '5:37p', asrJamaat: '6:30p', maghrib: '7:46p', maghribJamaat: '7:46p', isha: '8:44p', ishaJamaat: '9:15p' }
    ]
  }
};


// ═══════════════════════════════════════════════════════════════
//  AUTO-ADAPTER for index.html
//  Converts the shared format above into prayerDataByMonth,
//  which is the format index.html uses. Do not edit this.
// ═══════════════════════════════════════════════════════════════
const prayerDataByMonth = {};

Object.entries(prayerData).forEach(([monthKey, monthObj]) => {
  const monthAbbr = monthObj.displayName.split(' ')[0].slice(0, 3); // e.g. "Apr"
  prayerDataByMonth[monthKey] = {};

  monthObj.days.forEach(d => {
    // Build a human-readable gregorian string: "Wed, 1 Apr"
    const dayTitle = d.day.charAt(0) + d.day.slice(1).toLowerCase(); // "Wed"
    const gregorian = `${dayTitle}, ${d.date} ${monthAbbr}`;

    prayerDataByMonth[monthKey][d.date] = {
      start:    { fajr: d.fajr, sunrise: d.sunrise, dhuhr: d.dhuhr, asr: d.asr, maghrib: d.maghrib, isha: d.isha },
      jamaat:   { fajr: d.fajrJamaat, dhuhr: d.dhuhrJamaat, asr: d.asrJamaat, maghrib: d.maghribJamaat, isha: d.ishaJamaat },
      hijri:    d.hijri,
      gregorian: gregorian
    };
  });
});