'use strict'

import tap from 'tap-lite-tester'
import {demo} from '../dist/main'

tap.start()

tap.test @ 'demo to validate system', 
  t => ::
    t.equal @ demo(), 12345

tap.finish()
