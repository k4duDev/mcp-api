import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    Process.env.SUPABASE_URL,
    Process.env.SUPABASE_KEY
);

export default supabase;


// const supabase = createClient(
//     "https://ipuuchygackymxqewwmq.supabase.co",
//     "sb_publishable_m_aPgRepceu0ZuSB6WWtpg_rNdv_aHY"
// );