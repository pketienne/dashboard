import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      uid: 'pketienne',
    },
    hosts: [
      {
        fqdn: 'bowie.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
        vms: [
          {
            fqdn: 'cms-agent1.sca.iu.edu',
            ips: [],
            cores: 10,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'cms-head1.sca.iu.edu',
            ips: [],
            cores: 10,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'cms-store1.sca.iu.edu',
            ips: [],
            cores: 5,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'cobbler1606.sca.iu.edu',
            ips: [],
            cores: 5,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'lvs-16061.sca.iu.edu',
            ips: [],
            cores: 2,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
        ],
      },
      {
        fqdn: 'q10.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
      },
      {
        fqdn: 'reznor.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
      },
      {
        fqdn: 'jett.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
        vms: [
          {
            fqdn: 'disposable18001.sca.iu.edu',
            ips: [],
            cores: 10,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'disposable18002.sca.iu.edu',
            ips: [],
            cores: 12,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'xnat-test1.sca.iu.edu',
            ips: [],
            cores: 5,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
        ],
      },
      {
        fqdn: 'hendrix.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
        vms: [
          {
            fqdn: 'pub1.sca.iu.edu',
            ips: [],
            cores: 20,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'rady.sca.iu.edu',
            ips: [],
            cores: 6,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'rstudio1.sca.iu.edu',
            ips: [],
            cores: 2,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
        ],
      },
      {
        fqdn: 'aki.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
        vms: [
          {
            fqdn: 'rstudio1.sca.iu.edu',
            ips: [],
            cores: 32,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
        ],
      },
      {
        fqdn: 'raitt.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
        vms: [
          {
            fqdn: 'service1.odi.iu.edu',
            ips: [],
            cores: 10,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'sparc.sca.iu.edu',
            ips: [],
            cores: 10,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'wn-gen1.sca.iu.edu',
            ips: [],
            cores: 10,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
        ],
      },
      {
        fqdn: 'clapton.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
        vms: [
          {
            fqdn: 'download-dev2.odi.iu.edu',
            ips: [],
            cores: 5,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'gcs-dev.sca.iu.edu',
            ips: [],
            cores: 5,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'imagex.sca.iu.edu',
            ips: [],
            cores: 5,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'modprep6.sca.iu.edu',
            ips: [],
            cores: 3,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'modprep7.sca.iu.edu',
            ips: [],
            cores: 2,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'portal-dev2.odi.iu.edu',
            ips: [],
            cores: 2,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'service1.emcenter.iu.edu',
            ips: [],
            cores: 1,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
          {
            fqdn: 'youngmd6.sca.iu.edu',
            ips: [],
            cores: 1,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
        ],
      },
      {
        fqdn: 'numan.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
      },
      {
        fqdn: 'howlett.sca.iu.edu',
        ips: [],
        cores: 32,
        ram: 24,
        rom: [],
        powered: true,
        status: 'green',
        vms: [
          {
            fqdn: 'shiny1.ph.iu.edu',
            ips: [],
            cores: 16,
            ram: 4,
            rom: [],
            powered: true,
            status: 'green',
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
})
