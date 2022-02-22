export let mdDrodowns = `
  <div class="dropdown"> <button class="button" disabled data-lbl="pop">Population and Median Household Income</button> </div>
  <div class="dropdown">
    <button class="button" style="padding-left: 16%; padding-right: 16%">Demographics and Employment</button>
    <div class="dropdown-content">
      <button class="button" disabled data-lbl="empl_edu_gend">Gender</button>
      <button class="button" disabled data-lbl="empl_race_ethn">Race and Ethnicity</button>
      <button class="button" disabled data-lbl="empl_vet" style="padding-left: 14%; padding-right: 12%">Veteran Status</button>
    </div>
  </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="disabl_pov">Disability and Poverty</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="tanf">TANF</button> </div>
  <div class="dropdown">
    <button class="button" disabled style="padding-left: 1%; padding-right: 1%" data-lbl="collapse9">Apprenticeship Completers</button>
  </div>

  <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="collapse5" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>

  <div class="dropdown">    
    <button class="button" disabled data-lbl="collapse16" style="padding-left: 20%; padding-right: 20%">New Apprentice Programs</button>
  </div>
  <div class="dropdown">    
    <button class="button" disabled data-lbl="collapse17" style="padding-left: 20%; padding-right: 20%">New/Active Apprentices</button>
  </div>
  <div class="dropdown">
    <button class="button" disabled data-lbl="collapse20" style="padding-left: 2%; padding-right: 5%">Long Term Unemployed</button>
  </div>
  <div class="dropdown"> <button class="button" disabled data-lbl="snap" >SNAP</button> </div>
  <div class="dropdown">
    <button class="button" disabled style="padding-left: 2%; padding-right: 5%" data-lbl="collapse19">Service Partcipants in SNAP</button>
  </div>
  `

export let mdApprenticeshipCompleters = `
  <div id="collapse9" style="display: none;">
    <div class="ChartDiv">
      <div id="Chart11"></div>
      <div id="Print11" class="print"></div>
    </div>
    <div class="Table">
      <table id="table11"></table>
      <div class="Footer">
        <div class="FootLeft">
          <p id="Apprenticeship_Completers_Footer">Source: United States Department of Labor (Date Last Accessed: February 11, 2022)</p>
        </div>
      </div>
    </div>
  </div>
`

export let mdNewApprenticeShipPrograms = `
  <div id="collapse16" style="display:none;">
    <div class="ChartDiv">
      <div id="Chart18"> </div>
      <div id="Print18" class="print"></div>
    </div>
    <div class="Table">
      <table id="table55"></table>
      <div id="scrollTable">
        <div class="Footer">
          <p id="NewApprenticeship_Footer">
            Source: United States Department of Labor (Date Last Accessed: February 11, 2022) <br><br>
            Service participants means individuals who received SNAP benefits
          </p>
        </div>
      </div>
    </div>
  </div>
`

export let mdNewAndACtivePrograms = `
  <div id="collapse17" style="display:none;">
    <div class="ChartDiv">
      <div id="Chart19"></div>
      <div id="Print19" class="print"></div>
    </div>
    <div class="Table">
      <table id="table19"></table>
      <div class="Footer">
        <div id="New_Active_Programs_Footer">
          <p>Source: United States Department of Labor (Date Last Accessed: February 11, 2022)</p>
        </div>
      </div>
    </div>
  </div>
`

export let mdLongTermUnemployment = `
  <div id="collapse20" style="display: none;">
    <div id="Chart20">
      <p></p>
    </div>
    <div id="Print20" class="print"></div>
    <div class="Table">
      <table id="table20"></table>
      <div class="Footer">
        <div id="Long_Term_Uneployment_Footer">
          <p>Source: Current Population Survey, Latest Data Available is 2020</p>
        </div>
      </div>
    </div>
  </div>
`

export let mdServiceParticipantsInSnap = `
  <div id="collapse19" style="display: none">
    <div class="ChartDiv">
      <div id="Chart21" class="show"></div>
      <div class="print">
        <div id="Print21"></div>
      </div>
    </div>
    <div class="Table">
      <table id="table155"></table>
      <div class="Footer">
        <div id="Service_Participants_SNAP_Footer">
          <p>SNAP (Supplemental Nutrition Assistance Program) is available available from 2018 to 2019. <br><br>
          <p>Source: Jacob France Institute, accessed 5/15/2021</p>
        </div>
      </div>
    </div>
  </div>
`
