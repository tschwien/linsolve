<script>
export default{
    name: 'Agbs'
}
</script>
<template>
    <div>
        <h1>
            Allgemeine Geschäftsbedingungen (AGB) für LinSolve
        </h1>    
        <p>
1. Geltungsbereich 
Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der Website LinSolve und der damit verbundenen Dienstleistungen. Durch den Zugriff auf und die Nutzung der Website erklärst du dich mit den folgenden Bedingungen einverstanden.

2. Nutzung der Website
LinSolve ist eine Open-Source-Plattform, die Studierende bei der Lösung mathematischer Probleme im Bereich Operations Research (OR) unterstützt. Alle auf dieser Website zur Verfügung gestellten Inhalte und Tools dürfen kostenlos genutzt werden.

3. Open Source Lizenz 
Der zugrunde liegende Code von LinSolve ist Open Source und unterliegt der [hier passende Open-Source-Lizenz einfügen, z.B. MIT-Lizenz]. Das bedeutet, dass du den Code herunterladen, modifizieren und weiterverbreiten kannst, solange die Bedingungen der jeweiligen Lizenz eingehalten werden. Für detaillierte Informationen zur Lizenz und deren Bedingungen lies bitte die entsprechende Dokumentation im Repository.

4. Haftungsausschluss
LinSolve und die Entwickler übernehmen keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen und Berechnungen. Die Nutzung der Website erfolgt auf eigene Gefahr. Für mögliche Fehler oder Schäden, die durch die Nutzung der Plattform entstehen, übernehmen wir keine Verantwortung.

5. Änderungen und Verfügbarkeit 
Wir behalten uns das Recht vor, die Website jederzeit zu aktualisieren, zu verändern oder vorübergehend oder dauerhaft einzustellen. Für eventuelle Ausfallzeiten oder Datenverluste haften wir nicht.

6. Datenschutz
LinSolve erhebt keine personenbezogenen Daten, es sei denn, du kontaktierst uns freiwillig über Feedback-Formulare oder E-Mail. In diesem Fall werden die Daten ausschließlich zur Beantwortung deiner Anfragen genutzt und nicht an Dritte weitergegeben.

7. Anwendbares Recht
Diese AGB unterliegen dem deutschen Recht. 

8. Kontakt
Bei Fragen oder Feedback kannst du uns jederzeit unter [Kontakt-E-Mail] erreichen. 

Mit der Nutzung von LinSolve erklärst du dich mit diesen AGB einverstanden.
        </p>
        <div class="Home">
          <button class="mainButton"@click="">{{ $t('solve') }}</button>
      </div>
    </div>
</template>
<style>
p {
  font-size: 18px;
  color: #333;
}
</style>