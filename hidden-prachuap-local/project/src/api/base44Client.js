// Local auth implementation using localStorage
const LOCAL_USERS_KEY = 'local_auth_users';
const LOCAL_CURRENT_USER_KEY = 'local_auth_current_user';

const getUsers = () => JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || '[]');
const saveUsers = (users) => localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
const getCurrentUser = () => JSON.parse(localStorage.getItem(LOCAL_CURRENT_USER_KEY) || 'null');
const setCurrentUser = (user) => localStorage.setItem(LOCAL_CURRENT_USER_KEY, JSON.stringify(user));
const clearCurrentUser = () => localStorage.removeItem(LOCAL_CURRENT_USER_KEY);

export const db = {
  auth: {
    me: async () => {
      const user = getCurrentUser();
      if (!user) throw new Error('Not authenticated');
      return user;
    },
    isAuthenticated: async () => getCurrentUser() !== null,
    loginViaEmailPassword: async (email, password) => {
      const users = getUsers();
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) throw new Error('Invalid email or password');
      const { password: _p, ...safeUser } = user;
      setCurrentUser(safeUser);
      return safeUser;
    },
    register: async ({ email, password }) => {
      const users = getUsers();
      if (users.find(u => u.email === email)) throw new Error('Email already registered');
      const newUser = { id: crypto.randomUUID(), email, password, full_name: email.split('@')[0] };
      users.push(newUser);
      saveUsers(users);
      // Auto-verify locally — store pending email for OTP flow
      localStorage.setItem('local_pending_register_email', email);
      return { email };
    },
    verifyOtp: async ({ email, otpCode }) => {
      // Accept any 6-digit code locally
      const users = getUsers();
      const user = users.find(u => u.email === email);
      if (!user) throw new Error('User not found');
      const { password: _p, ...safeUser } = user;
      setCurrentUser(safeUser);
      localStorage.removeItem('local_pending_register_email');
      return { access_token: 'local_token' };
    },
    resendOtp: async (email) => {
      // No-op locally
      return {};
    },
    setToken: (token) => {
      // No-op locally — session managed via localStorage user object
    },
    resetPasswordRequest: async (email) => {
      // No-op locally — always "succeeds"
      return {};
    },
    resetPassword: async ({ resetToken, newPassword }) => {
      // For local use, update password by token stored in URL
      const users = getUsers();
      const email = localStorage.getItem('local_reset_email');
      if (!email) throw new Error('Invalid reset link');
      const idx = users.findIndex(u => u.email === email);
      if (idx === -1) throw new Error('User not found');
      users[idx].password = newPassword;
      saveUsers(users);
      localStorage.removeItem('local_reset_email');
      return {};
    },
    logout: () => {
      clearCurrentUser();
    },
    redirectToLogin: () => {
      window.location.href = '/login';
    },
    loginWithProvider: (provider, redirectTo) => {
      // OAuth not available locally — redirect to email login
      alert('Social login is not available in local mode. Please use email/password.');
      window.location.href = '/login';
    },
  },
  entities: new Proxy({}, {
    get: () => ({
      filter: async () => [],
      get: async () => null,
      create: async (data) => ({ id: crypto.randomUUID(), ...data }),
      update: async (id, data) => ({ id, ...data }),
      delete: async () => ({}),
    })
  }),
  integrations: {
    Core: {
      UploadFile: async () => ({ file_url: '' })
    }
  }
};

export const base44 = db;
export default db;
