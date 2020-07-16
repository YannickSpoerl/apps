<template>
  <div>
    <div v-if="$i18n.locale === 'en'" class="content__default">
      <h1>The MIT License (MIT)</h1>
      <p>
        Copyright (c) Yannick Spoerl <a href="mailto:yannick@yannickspoerl.de">yannick@yannickspoerl.de</a> (https://github.com/yannickspoerl)
      </p>
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
      </p>
      <p>
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
      </p> <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
      </p>
    </div>
    <div v-if="$i18n.locale !== 'en'">
      <h1>Die MIT Licenz (MIT)</h1>
      <p>
        Copyright (c) Yannick Spoerl <a href="mailto:yannick@yannickspoerl.de">yannick@yannickspoerl.de</a> (https://github.com/yannickspoerl)
      </p>
      <p>
        Jedem, der eine Kopie dieser Software und der zugehörigen Dokumentationsdateien (die "Software") erhält,
        wird hiermit kostenlos die Erlaubnis erteilt, ohne Einschränkung mit der Software zu handeln,
        einschließlich und ohne Einschränkung der Rechte zur Nutzung, zum Kopieren, Ändern, Zusammenführen,
        Veröffentlichen, Verteilen, Unterlizenzieren und/oder Verkaufen von Kopien der Software, und Personen,
        denen die Software zur Verfügung gestellt wird, dies unter den folgenden Bedingungen zu gestatten:
      </p>
      <p>
        Der obige Urheberrechtshinweis und dieser Genehmigungshinweis müssen in allen Kopien oder wesentlichen Teilen der Software enthalten sein.
      </p>
      <p>
        DIE SOFTWARE WIRD OHNE MÄNGELGEWÄHR UND OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG, EINSCHLIEßLICH, ABER NICHT BESCHRÄNKT AUF DIE GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND DER NICHTVERLETZUNG VON RECHTEN DRITTER, ZUR VERFÜGUNG GESTELLT. DIE AUTOREN ODER URHEBERRECHTSINHABER SIND IN KEINEM FALL HAFTBAR FÜR ANSPRÜCHE, SCHÄDEN ODER ANDERE VERPFLICHTUNGEN, OB IN EINER VERTRAGS- ODER HAFTUNGSKLAGE, EINER UNERLAUBTEN HANDLUNG ODER ANDERWEITIG, DIE SICH AUS, AUS ODER IN VERBINDUNG MIT DER SOFTWARE ODER DER NUTZUNG ODER ANDEREN GESCHÄFTEN MIT DER SOFTWARE ERGEBEN.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'License'
}
</script>

<style lang="stylus">
@import '~assets/style/index'
.content-wrapper
  padding 160px 15px 80px 15px
  min-height calc(100vh - 80px - 60px - 160px)
  max-width $contentWidth
  margin 0 auto

  @media (max-width: $MQMobile)
    &
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)
</style>
