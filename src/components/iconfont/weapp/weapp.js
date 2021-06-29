Component({
  properties: {
    // Uniquely1 | QRcode | Recognitionarea | default | folder-publishing | DWFPDF | print-shop | Related | rely | Subtasks | alipay | wechat-pay | hook | close | folder-settings | move | mac | win | Wechat | label | Info | notCloud | download1 | company | inbox1 | common | file-management | duty | organizationalStr1 | statistics | major | my-loan | my-application | to-do-list | person2 | shortcut | settings | full-screen | Zoomout | Zoom-in | spin | list | frame-template | customize | log-in | drawing | personnel-signatureRegistrationSeal1 | drawing1 | export | error | template | import | customize1 | minimize-pc | close-pc | web1 | addressList | approved | announcements | inbox | myApproval | Operating | finance | archivesCenter | projectCenter | bidding | wallet | workbench | organizationalStr | synchronous-tray | Calendar | CheckCircle | CheckSmallforCheckbox | Check | eye-hide | email | eye | minus-square | phone | filter1 | search | remove-round | user | drag-rows1 | person | archive | arrowsalt | back | add | client | Confidentiality | code | collection-pre | copy | edit | contract | favorites | drag-rows | download | customer-service | flag | filter | folder-add | locking | folder | more-horizontal | menu | more-vertical | message | operation-record | new-favorite | pause | play | print | rename | save | record | refresh | quit | shrink | share | synchronize | signature | tag | trash | tender | upload | web | transfer | window | work-package | Right | left | down1 | right | top | left1 | up1 | right1 | down2 | down | Left | up
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
