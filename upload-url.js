const { Video } = require('@mux/mux-node');

const muxClient = new Video('zf2QIL47kPLAbai2D+zIPgBfMfPWOJlAW9plmh2hxDIzd+XtW7f1WiljNbA++QqIMC4gxALF9j5', '<Stx02tMjQ4TYlnhSNBYSwfThSSkW2SfA1FLoXjKAwm5Wg8IaKAcyL4Ln/JUe6hOiW+oy1ZCNQBA>'); // Replace <YOUR_SECRET_KEY> with your actual secret key

module.exports = async (req, res) => {
  try {
    const upload = await muxClient.Uploads.create({
      new_asset_settings: { playback_policy: 'public' },
      cors_origin: '*',
    });
    res.status(200).json({ uploadUrl: upload.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
